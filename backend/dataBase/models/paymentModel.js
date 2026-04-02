import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({

    booking: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Booking",
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    eventManager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "eventManagement",
        required: true
    },

    razorpayOrderId: { type: String, required: true },
    razorpayPaymentId: { type: String, default: '' },
    razorpaySignature: { type: String, default: '' },
    receipt: { type: String },
    amount: { type: Number },
    currency: { type: String, default: "INR" },
    adminCommissionPercent: { type: Number, default: 30 },
    adminCommissionAmount: { type: Number, required: true },
    eventManagerAmount: { type: String, required: true },

    status: {
        type: String,
        enum: ["paid", "failed", "created"],
        default: "created"
    },

    emailSent: { type: Boolean, default: false }
}, { timestamps: true })

const PaymentModel = mongoose.models.Payments || mongoose.model("Payments", PaymentSchema)

export default PaymentModel