import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: Array, required: true },
  category: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: Number },
});

const ProductModel =
  mongoose.models.product || mongoose.model("Product", ProductSchema);

export default ProductModel;
