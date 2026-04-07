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

    const userId = req.userId

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
      userId: userId,
      productId,
      address,
      items,
      paymentMethod: "COD",
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

    const order = await razorpay.orders.create({
      amount: Math.round(split.totalPaid * 100), //paisa
      currency: "INR",
      notes: {
        userId: String(userId),
        productId: String(productId),
        responseId: String(responseId),
        eventDate: String(eventDate),
        address: JSON.stringify(address),
        items: JSON.stringify(items),
        owner: String(product.owner),
        baseAmount: String(baseAmount),
        totalPaid: String(split.totalPaid),
        adminCommissionPercent: String(split.adminCommissionPercent),
        adminCommissionAmount: String(split.adminCommissionAmount),
        eventManagerAmount: String(split.eventManagerAmount)
      }
    })

    if (!order || !order.id) {
      return res.json({
        success: false,
        message: "Failed to create Razorpay order"
      });
    }

    res.json({
      success: true, message: "Order created successfully",
      order: {
        id: order.id,
        amount: order.amount,
        currency: order.currency,
      }
    })

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
//verify razorpay
export const verifyRazorpay = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const userId = req.userId;

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, productId, address, items, eventDate, responseId } = req.body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      await session.abortTransaction();
      session.endSession();
      return res.json({
        success: false,
        message: "Missing payment verification fields"
      });
    }

    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_TEST_API_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (generatedSignature !== razorpay_signature) {
      await session.abortTransaction();
      session.endSession();
      return res.json({
        success: false,
        message: "Invalid payment signature"
      });
    }

    const product = await ProductModel.findById(productId).session(session);

    if (!product) {
      await session.abortTransaction();
      session.endSession();
      return res.json({ success: false, message: "Product not found" });
    }

    const baseAmount = Number(product.price.toFixed(2));
    const split = calculateMoneySplit(baseAmount, 30);

    const booking = new BookingModel({
      owner: product.owner,
      userId,
      productId,
      address,
      items,
      paymentMethod: "Razorpay",
      payment: true,
      paymentStatus: "paid",
      razorpayPaymentId: razorpay_payment_id,
      eventDate,
      baseAmount,
      totalPaid: split.totalPaid,
      adminCommissionPercent: split.adminCommissionPercent,
      adminCommissionAmount: split.adminCommissionAmount,
      eventManagerAmount: split.eventManagerAmount,
      date: Date.now()
    })

    await booking.save({ session })

    const receipt = `bk_${booking._id.toString().slice(-12)}`;

    const payment = new PaymentModel({
      booking: booking._id,
      user: userId,
      event: product._id,
      eventManager: product.owner,
      razorpayOrderId: razorpay_order_id,
      razorpayPaymentId: razorpay_payment_id,
      razorpaySignature: razorpay_signature,
      receipt,
      amount: split.totalPaid,
      currency: "INR",
      status: "paid",
      adminCommissionPercent: split.adminCommissionPercent,
      adminCommissionAmount: split.adminCommissionAmount,
      eventManagerAmount: split.eventManagerAmount
    });

    await payment.save({ session });

    if (responseId) {
      await ResponseModel.findByIdAndUpdate(
        responseId,
        { status: "paid" },
        { session }
      );
    }

    await session.commitTransaction();
    session.endSession();

    try {
      await sendBookingSuccessEmail({
        to: address.email,
        customerName: `${address.firstName || ""} ${address.lastName || ""}`.trim(),
        receipt,
        eventName: product.event_name || product.name,
        eventDate,
        totalPaid: booking.totalPaid,
        razorpayPaymentId: razorpay_payment_id,
        eventLocation: product.location,
        companyName: product.company_name,
        productId: product._id
      });

      await PaymentModel.updateOne(
        { _id: payment._id },
        { $set: { emailSent: true } }
      );
    } catch (mailError) {
      console.log("Mail error:", mailError);
    }

    return res.json({
      success: true,
      message: "Payment verified and booking confirmed",
      receipt,
      data: {
        bookingId: booking._id,
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id,
        totalPaid: booking.totalPaid
      }
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.log("verifyRazorpay error:", error);
    return res.json({ success: false, message: error.message });
  }
};

export const getReceipt = async (req, res) => {
  try {

    const { productId } = req.params

    const booking = await BookingModel.findOne({
      paymentStatus: "paid",
      productId: productId
    })
      .populate("productId")
      .populate("userId");

    if (!booking) {
      return res.json({ success: false, message: "Paid booking not found" });
    }

    const payment = await PaymentModel.findOne({
      booking: booking._id,
      status: "paid"
    });

    if (!payment) {
      return res.json({ success: false, message: "Payment not found" });
    }

    return res.json({
      success: true,
      receipt: {
        receiptRef: payment.receipt,
        bookingId: booking._id,
        event: booking.productId?.event_name || booking.productId?.name,
        eventDate: booking.eventDate,
        totalPaid: booking.totalPaid,
        currency: payment.currency,
        razorpayOrderId: payment.razorpayOrderId,
        razorpayPaymentId: payment.razorpayPaymentId,
        paidAt: payment.updatedAt
      }
    });
  } catch (error) {
    console.log("getReceipt error:", error);
    res.json({ success: false, message: error.message });
  }
};

//All bookings data for admin panal

export const allOrder = async (req, res) => {

  try {

    const allBookings = await PaymentModel.find({})
    return res.json({ success: true, allBookings })

  } catch (error) {
    console.log("getReceipt error:", error);
    res.json({ success: false, message: error.message });
  }

};

//All bookings data for event management panel

export const allOrderEventManagement = async (req, res) => {
  try {
    const ownerId = new mongoose.Types.ObjectId(req.userId);

    const bookings = await BookingModel.find({ owner: ownerId })
      .populate("userId", "name email") // user details
      .populate("productId") // event/product details
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
