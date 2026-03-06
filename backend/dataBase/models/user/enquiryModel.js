import mongoose from "mongoose";

const EnquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String },
    eventDate: { type: String, required: true },
    place: { type: String, required: true },
    count: { type: String, required: true },
    additionalDetails: { type: String },

    //get and store product data

    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },

    userData: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    
  },
  { timestamps: true, minimize: false },
);

const EnquiryModel =
  mongoose.models.enquiry || mongoose.model("enquiry", EnquirySchema);

export default EnquiryModel;
