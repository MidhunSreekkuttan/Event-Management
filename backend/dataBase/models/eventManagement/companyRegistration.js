import mongoose from "mongoose";

const CompanyRegistrationSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "eventManagement",
      required: true,
    },

    companyName: { type: String, required: true },
    ownerName: { type: String, required: true },
    contactNumber: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },

    pdfTitle: { type: String, required: true },
    pdfPath: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const CompanyRegistrationModel =
  mongoose.models.CompanyRegistration ||
  mongoose.model("CompanyRegistration", CompanyRegistrationSchema);

export default CompanyRegistrationModel;
