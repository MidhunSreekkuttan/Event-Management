import express from "express";
import {
  addProduct,
  listProduct,
  removeProduct,
  singleProduct,
} from "../../controllers/eventManagement/productController.js";
import upload from "../../middleware/eventManagement/multer.js";

const ProductRouter = express.Router();

ProductRouter.post(
  "/addProduct",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct,
);
ProductRouter.post("/listProduct", listProduct);
ProductRouter.post("/removeProduct", removeProduct);
ProductRouter.post("/singleProduct", singleProduct);

export default ProductRouter;
