import mongoose from "mongoose";

const staffSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true },
);

const staffsModel =
  mongoose.models.staffs || mongoose.model("Staffs", staffSchema);

export default staffsModel;
