import mongoose from "mongoose";

const BookingScheme = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  status: { type: Boolean, required: true, default: "Booked" },
  paymentMethod: { type: Boolean, required: true },
  payment: { type: Boolean, required: true, default: false },
  date: { type: Number, required: true },
});

const BookingModel =
  mongoose.models.booking || mongoose.model("Booking", BookingScheme);

export default BookingModel;
