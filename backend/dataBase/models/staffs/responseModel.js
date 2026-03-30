import mongoose from "mongoose";

const ResponseSchema = new mongoose.Schema(
  {
    enquiryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "enquiry",
      required: true,
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },

    relatedEvents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
    ],

    respondMessage: { type: String, required: true },

    status: { type: String, default: "pending", required: true },

    date: { type: Date, required: true },
  },

  { timestamps: true },
);

const ResponseModel =
  mongoose.models.Response || mongoose.model("Response", ResponseSchema);

export default ResponseModel;
