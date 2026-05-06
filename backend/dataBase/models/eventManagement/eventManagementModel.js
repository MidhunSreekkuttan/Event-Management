import mongoose from "mongoose";

const eventManagementSchema = new mongoose.Schema(
  {
    name: { type: String, requred: true },
    email: { type: String, requred: true, unique: true },
    password: { type: String, requred: true },
    verifyOtp: { type: String, default: "" },
    verifyOtpExpire: { type: Number, default: 0 },
    isAccountVerified: { type: Boolean, default: false },
    isAdminVerified: { type: String, default: "pending" },
  },
  { minimize: false, timestamps: true },
);

const eventManagementModel =
  mongoose.models.eventManagement ||
  mongoose.model("eventManagement", eventManagementSchema);

export default eventManagementModel;
