import mongoose from "mongoose";

const BookingScheme = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "eventManagement",
    required: true,
  },

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
  items: { type: Array, required: true },
  address: { type: Object, required: true },
  status: { type: String, required: true, default: "Booked" },
  paymentMethod: { type: String, required: true },
  payment: { type: Boolean, required: true, default: false },
  date: { type: Number, required: true },
});

const BookingModel =
  mongoose.models.booking || mongoose.model("Booking", BookingScheme);

export default BookingModel;
