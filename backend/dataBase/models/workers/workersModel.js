import mongoose from "mongoose";

const workersSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    verifyOtp: { type: String, default: "" },
    verifyOtpExpire: { type: Number, default: 0 },
    isAccountVerified: { type: Boolean, default: false },
    isAdminVerified: { type: String, default: "pending" },
  },
  { minimize: false },
);

const workersModel =
  mongoose.models.workers || mongoose.model("workers", workersSchema);

export default workersModel;
