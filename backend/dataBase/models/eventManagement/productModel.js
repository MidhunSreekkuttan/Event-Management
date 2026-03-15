import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    company_name: { type: String, required: true },
    event_name: { type: String, required: true },
    price: { type: Number, required: true },
    starting_price: { type: String, required: true },
    main_services: { type: [String], default: [] }, // ✅ user adds these
    image: { type: Array, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    location: { type: String, required: true },
    date: { type: Date, required: true },

    //event || product start time
    startTime: { type: Date, required: true },
    //event || product end time
    endTime: { type: Date, required: true },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

ProductSchema.virtual("status").get(function () {
  const now = new Date();

  if (now < this.startTime) return "upcoming";
  if (now >= this.startTime && now <= this.endTime) return "ongoing";
  return "completed";
});

const ProductModel =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default ProductModel;
