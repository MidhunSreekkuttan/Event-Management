import mongoose from "mongoose";

const BookingScheme = new mongoose.Schema(
  {

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

    status: {
      type: String,
      enum: ["pending", "confirmed", "rejected"],
      default: "pending",
    },

    paymentMethod: { type: String },
    baseAmount: { type: Number },
    totalPaid: { type: Number },
    adminCommissionPercent: { type: Number },
    adminCommissionAmount: { type: Number },
    eventManagerAmount: { type: String },

    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed", "refunded"],
      default: "pending",
    },

    eventDate: { type: String, required: true },
    date: { type: Number, required: true },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

BookingScheme.virtual("bookingStatus").get(function () {
  const now = new Date();

  if (this.status === "rejected") return "rejected";
  if (this.status === "pending") return "pending";

  if (now < this.bookingStartTime) return "upcoming";
  if (now >= this.bookingStartTime && now <= this.bookingEndTime)
    return "ongoing";

  return "completed";
});

const BookingModel =
  mongoose.models.booking || mongoose.model("Booking", BookingScheme);

export default BookingModel;
