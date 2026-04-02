import mongoose from "mongoose";
import crypto from 'crypto'

import BookingModel from "../dataBase/models/bookingModel.js";
import ProductModel from "../dataBase/models/eventManagement/productModel.js";
import razorpay from "../config/razorpay.js";
import ResponseModel from "../dataBase/models/staffs/responseModel.js";
import calculateMoneySplit from "../config/calculateMoneySplit.js";
import PaymentModel from "../dataBase/models/paymentModel.js";
import { sendBookingSuccessEmail } from "../config/emailTemplate.js";

//place booking in cod methode

export const placebooking = async (req, res) => {
  try {

    const { userId } = req.userId

    const { productId, address, items, eventDate, responseId } =
      req.body;

    const product = await ProductModel.findById(productId);

    if (!product) {
      return res.json({
        success: false,
        message: "Product not found",
      });
    }

    if (!product.owner) {
      return res.json({
        success: false,
        message: "Product owner missing",
      });
    }

    const bookingData = {
      owner: product.owner,
      userId,
      productId,
      address,
      items,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
      eventDate,
    };

    const newBooking = new BookingModel(bookingData);
    await newBooking.save();

    await ResponseModel.findByIdAndUpdate(responseId, { status: "paid" });

    res.json({
      success: true,
      message: "Booking Successful",
      booking: newBooking,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//place booking in razorpay methode

export const placebookingRazorpay = async (req, res) => {
  try {

    const userId = req.userId

    const { productId, address, items, eventDate, responseId } = req.body;

    const product = await ProductModel.findById(productId);

    if (!product) {
      return res.json({
        success: false,
        message: "Product not found",
      });
    }

    if (!product.owner) {
      return res.json({
        success: false,
        message: "Product owner missing",
      });
    }

    const baseAmount = Number(product.price.toFixed(2))
    const split = calculateMoneySplit(baseAmount, 30)

    const booking = await BookingModel.create({
      owner: product.owner,
      userId: userId,
      productId: productId,
      address,
      items,
      paymentMethod: "Razorpay",
      eventDate,
      baseAmount,
      totalPaid: split.totalPaid,
      adminCommissionPercent: split.adminCommissionPercent,
      adminCommissionAmount: split.adminCommissionAmount,
      eventManagerAmount: split.eventManagerAmount,
      date: Date.now()
    })

    const receipt = `bk_${booking._id.toString().slice(-12)}`

    const order = await razorpay.orders.create({
      amount: Math.round(split.totalPaid * 100), //paisa
      currency: "INR",
      receipt,
      notes: {
        bookingId: String(booking._id),
        eventId: String(product._id),
        userId: String(userId)
      }
    })

    if (!order || !order.id) {
      return res.json({
        success: false,
        message: "Failed to create Razorpay order"
      });
    }

    await PaymentModel.create({
      booking: booking._id,
      user: userId,
      event: product._id,
      eventManager: product.owner,
      razorpayOrderId: order.id,
      receipt,
      amount: split.totalPaid,
      currency: "INR",
      adminCommissionPercent: split.adminCommissionPercent,
      adminCommissionAmount: split.adminCommissionAmount,
      eventManagerAmount: split.eventManagerAmount
    })

    await ResponseModel.findByIdAndUpdate(responseId, { status: "paid" });

    res.json({
      success: true, message: "Order created successfully",
      bookingId: booking._id,
      order: {
        id: order.id,
        amount: order.amount,
        currency: order.currency,
        receipt,
      }
    })

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
//verify razorpay
export const verifyRazorpay = async (req, res) => {

  const session = await mongoose.startSession()
  session.startTransaction()

  try {

    const userId = req.userId

    const { bookingId, razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    if (!bookingId || !razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      await session.abortTransaction()
      session.endSession()

      return res.json({ success: false, message: "Missing payment verification fields" })
    }

    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_TEST_API_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex")

    if (generatedSignature !== razorpay_signature) {
      await session.abortTransaction()
      session.endSession()
      return res.json({ success: false, message: "Invalid payment signature" })
    }

    const booking = await BookingModel.findOne({
      _id: bookingId,
      userId: userId
    })
      .populate("userId")
      .populate("productId")
      .session(session)

    if (!booking) {
      await session.abortTransaction()
      session.endSession()

      return res.json({ success: false, message: "Booking not found" })
    }

    const payment = await PaymentModel.findOne({
      booking: bookingId,
      razorpayOrderId: razorpay_order_id
    }).session(session)

    if (!payment) {
      return res.json({ success: false, message: "Payment record not found" })
    }

    if (payment.status === "paid" && booking.paymentStatus === "paid") {
      await session.abortTransaction()
      session.endSession()

      return res.json({ success: false, message: "Payment already verified" })
    }

    const event = await ProductModel.findById(booking.productId._id).session(session)

    if (!event) {
      await session.abortTransaction()
      session.endSession()

      return res.json({ success: false, message: "Event not found" })
    }

    await event.save({ session })

    booking.razorpayPaymentId = razorpay_payment_id
    payment.razorpaySignature = razorpay_signature
    payment.status = "paid"
    await payment.save({ session })

    await session.commitTransaction()
    session.endSession()

    try {

      if (!payment.emailSent) {
        await sendBookingSuccessEmail({
          to: booking.userId.email,
          customerName: booking.userId.name,
          receipt: payment.receipt,
          eventName: event.event_name,
          eventDate: event.date.split("T"[0]),
          totalPaid: booking.totalPaid,
          razorpayOrderId: razorpay_order_id,
          razorpayPaymentId: razorpay_payment_id
        })
      }

      await PaymentModel.updateOne(
        { _id: payment._id },
        { $set: { emailSent: true } }
      )

    } catch (mailError) {
      console.log(mailError);
      res.json({ success: false, message: mailError.message })
    }

    return res.json({
      success: true,
      message: "Payment verified and booking confirmed",
      receipt: payment.receipt,
      data: {
        bookingId: booking._id,
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id,
        totalPaid: booking.totalPaid,
      }
    })

  } catch (error) {
    await session.abortTransaction()
    session.endSession()

    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export const getReceipt = async (req, res) => {

  try {

    const { userId } = req.userId
    const { bookingId } = req.params

    const booking = await BookingModel.findOne({
      _id: bookingId,
      userId: userId,
      paymentStatus: "paid"
    })
      .populate("productId")
      .populate("userId")

    if (!booking) {
      return res.json({ success: false, message: "Paid booking not found" })
    }

    const payment = await PaymentModel.findOne({
      booking: booking._id,
      status: "paid"
    })

    if (!payment) {
      return res.json({ success: true, message: "Payment not found" })
    }

    return res.json({
      success: true,
      receipt: {
        receiptRef: payment.receipt,
        bookingId: booking._id,
        event: booking.productId.event_name,
        eventDate: booking.productId.date,
        totalPaid: booking.totalPaid,
        currency: payment.currency,
        razorpayOrderId: payment.razorpayOrderId,
        razorpayPaymentId: payment.razorpayPaymentId,
        paidAt: payment.updatedAt
      }
    })

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message })
  }

}

//All bookings data for admin panal

export const allOrder = async (req, res) => { };

//All bookings data for event management panel

export const allOrderEventManagement = async (req, res) => {
  try {
    const ownerId = new mongoose.Types.ObjectId(req.userId);

    const bookings = await BookingModel.find({ owner: ownerId })
      .populate("userId", "name email") // user details
      .populate("productId", "name price") // event/product details
      .sort({ date: -1 });

    res.json({
      success: true,
      bookings,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};
//user booking data for frontend

export const userBooking = async (req, res) => {
  try {
    const userId = req.user.id;
    const orders = await BookingModel.find({ userId: userId })
      .populate("items.productId") // ✅ get product data
      .populate("userId"); // ✅ get user data
    return res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//update booking status for event managemnet panel
export const updateBooking = async (req, res) => {
  try {
    const { orderId, status } = req.body;

    if (!orderId || !status) {
      return res.json({
        success: false,
        message: "Order ID and Status are required",
      });
    }

    const updatedBooking = await BookingModel.findByIdAndUpdate(orderId, {
      status,
    });

    if (!updatedBooking) {
      return res.json({
        success: false,
        message: "Booking not found",
      });
    }

    res.json({
      success: true,
      message: "Status Updated Successfully",
      booking: updatedBooking,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
