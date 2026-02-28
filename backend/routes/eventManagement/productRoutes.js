import express from "express";
import {
  addProduct,
  listProduct,
  removeProduct,
  singleProduct,
} from "../../controllers/eventManagement/productController.js";
import upload from "../../middleware/eventManagement/multer.js";
import EventManagementAuth from "../../middleware/eventManagement/eventManagementAuth.js";

const ProductRouter = express.Router();

ProductRouter.post(
  "/addProduct",
  EventManagementAuth,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct,
);
ProductRouter.get("/listProduct", listProduct);
ProductRouter.post("/removeProduct", EventManagementAuth, removeProduct);
ProductRouter.post("/singleProduct", EventManagementAuth, singleProduct);

export default ProductRouter;
