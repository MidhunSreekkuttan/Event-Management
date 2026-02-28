import { v2 as cloudinary } from "cloudinary";
import ProductModel from "../../dataBase/models/eventManagement/productModel.js";

//Function for Add Product
export const addProduct = async (req, res) => {
  try {
    const { name, description, category, location } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined,
    );

    let imageUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      }),
    );

    const productData = {
      name,
      description,
      category,
      location,
      image: imageUrl,
      date: Date.now(),
    };

    const product = new ProductModel(productData);

    await product.save();
    res.json({ success: true, message: "Product added" });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

//Function for List Product
export const listProduct = async (req, res) => {
  try {
    const product = await ProductModel.find({});
    return res.json({ success: true, product });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

//Function for remove Product
export const removeProduct = async (req, res) => {
  try {
    await ProductModel.findByIdAndDelete(req.body.id);

    return res.json({ success: true, message: "Product Deleted" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

//Function for single Product info
export const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;

    const product = await ProductModel.findById(productId);
    return res.json({ success: true, product });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
