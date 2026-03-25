import mongoose from "mongoose";

const WorkersRegistrationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    email: { type: String, required: true },
    jobRole: {
      type: String,
      enum: [
        "event coordinator",
        "event staff",
        "event manager",
        "catering service",
        "technical support",
      ],
      required: true,
    },
    uploadIdProof: { type: String, required: true },
    uploadWorkPermit: { type: String, required: true },
    uploadAddressProof: { type: String, required: true },
    uploadResume: { type: String, required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  },
);

const WorkersRegistrationModel =
  mongoose.models.WorkersRegistration ||
  mongoose.model("WorkersRegistration", WorkersRegistrationSchema);

export default WorkersRegistrationModel;
