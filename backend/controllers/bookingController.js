import mongoose from "mongoose";
import BookingModel from "../dataBase/models/bookingModel.js";
import ProductModel from "../dataBase/models/eventManagement/productModel.js";
import razorpay from "../config/razorpay.js";

//place booking in cod methode

export const placebooking = async (req, res) => {
  try {
    const { userId, productId, address, items, eventDate } = req.body;

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

//place booking in strip methode

export const placebookingRazorpay = async (req, res) => {
  try {
    const { userId, productId, address, items, eventDate } = req.body;

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

    const amount = items.price;

    const bookingData = {
      owner: product.owner,
      userId,
      productId,
      address,
      items,
      paymentMethod: "Razorpay",
      payment: false,
      date: Date.now(),
      eventDate,
    };

    const newBooking = new BookingModel(bookingData);
    await newBooking.save();

    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: newBooking._id.toString(),
    };

    await razorpay.orders.create(options, (error, order) => {
      if (error) {
        console.log(error);
        return res.json({ success: false, message: error });
      }
      res.json({ success: true, order });
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//All bookings data for admin panal

export const allOrder = async (req, res) => {};

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
