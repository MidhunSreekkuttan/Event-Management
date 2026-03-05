import BookingModel from "../dataBase/models/bookingModel.js";

//place booking in cod methode

export const placebooking = async (req, res) => {
  try {
    const { userId, productId, address, items } = req.body;

    const bookingData = {
      userId,
      productId,
      address,
      items,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };

    const newBooking = new BookingModel(bookingData);
    await newBooking.save();
    res.json({ success: true, message: "Booking Successful" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//place booking in strip methode

export const placebookingStrip = async (req, res) => {};

//All bookings data for admin panal

export const allOrder = async (req, res) => {};

//All bookings data for event management panel

export const allOrderEventManagement = async (req, res) => {};

//user booking data for frontend

export const userBooking = async (req, res) => {};

//Update booking status for event management panel

export const updateStatus = async (req, res) => {};
