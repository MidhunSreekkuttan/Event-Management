import { v2 as cloudinary } from "cloudinary";
import ProductModel from "../../dataBase/models/eventManagement/productModel.js";
import getEventStatus from "../../config/getEventStatus.js";

//Function for Add Product
export const addProduct = async (req, res) => {
  try {
    const {
      company_name,
      event_name,
      price,
      starting_price,
      main_services,
      description,
      category,
      location,
      startTime,
      endTime,
    } = req.body;

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
          folder: "products",
          transformation: [
            { width: 1200, height: 1200, crop: "limit" },
            { quality: "auto", fetch_format: "auto" },
          ],
        });
        return result.secure_url;
      }),
    );

    if (!startTime || !endTime) {
      return res.json({
        success: false,
        message: "Start time and end time are required",
      });
    }

    if (new Date(endTime) <= new Date(startTime)) {
      return res.json({
        success: false,
        message: "End time must be greater than start time",
      });
    }

    const productData = {
      owner: req.userId,
      company_name,
      event_name,
      price,
      starting_price,
      main_services,
      description,
      category,
      location,
      image: imageUrl,
      date: Date.now(),
      startTime: new Date(startTime),
      endTime: new Date(endTime),
    };

    const product = new ProductModel(productData);

    await product.save();
    res.json({ success: true, message: "Product added" });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

//Function for owner List Product
export const ownerListProduct = async (req, res) => {
  try {
    const product = await ProductModel.find({ owner: req.userId });

    const productsWithStatus = product.map((product) => ({
      ...product.toObject(),
      status: getEventStatus(product.startTime, product.endTime),
    }));

    return res.json({ success: true, product: productsWithStatus });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

//Function for public List Product
export const listProduct = async (req, res) => {
  try {
    const product = await ProductModel.find({});

    const productsWithStatus = product.map((product) => ({
      ...product.toObject(),
      status: getEventStatus(product.startTime, product.endTime),
    }));

    return res.json({ success: true, product: productsWithStatus });
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
    const { id } = req.params;

    const product = await ProductModel.findById(id);

    res.json({ success: true, product });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

// Update Product
export const updateProduct = async (req, res) => {
  try {

    const { id } = req.params

    const product = await ProductModel.findById(id)

    if (!product) {
      return res.json({
        success:false,
        message:"Event not found"
      })
    }

    const {
      company_name,
      event_name,
      price,
      starting_price,
      main_services,
      description,
      category,
      location,
      startTime,
      endTime
    } = req.body

    let images = [...product.image]

    const imageFiles = [
      req.files?.image1?.[0],
      req.files?.image2?.[0],
      req.files?.image3?.[0],
      req.files?.image4?.[0]
    ]

    for (let i = 0; i < imageFiles.length; i++) {
      if (imageFiles[i]) {
        const result = await cloudinary.uploader.upload(
          imageFiles[i].path,
          { folder: "products" }
        )

        images[i] = result.secure_url
      }
    }
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      id,
      { 
        company_name,
        event_name,
        price,
        starting_price,
        main_services,
        description,
        category,
        location,
        startTime,
        endTime,
        image: images
      },  
       { new:true }
    )

    res.json({
      success:true,
      message:"Event Updated Successfully",
      product:updatedProduct
    })

  } catch (error) {

    console.log(error)

    res.json({
      success:false,
      message:error.message
    })

  }
}