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
  },
  {
    timestamps: true,
  },
);

const ProductModel =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default ProductModel;
