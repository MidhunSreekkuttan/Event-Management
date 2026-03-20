import express from "express";
import {
  addProduct,
  listProduct,
  ownerListProduct,
  removeProduct,
  singleProduct,
} from "../../controllers/eventManagement/productController.js";
import upload from "../../middleware/eventManagement/multer.js";
import EventManagementAuth from "../../middleware/eventManagement/eventManagementAuth.js";
import {
  listPdf,
  uploadPdf,
} from "../../controllers/eventManagement/companyRegistrationController.js";

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
ProductRouter.get("/ownerListProduct", EventManagementAuth, ownerListProduct);
ProductRouter.post("/removeProduct", EventManagementAuth, removeProduct);
ProductRouter.post("/singleProduct", EventManagementAuth, singleProduct);

//route for public user

ProductRouter.get("/listProduct", listProduct);

//upload pdf
ProductRouter.post(
  "/uploadPdf",
  EventManagementAuth,
  upload.single("pdf"),
  uploadPdf,
);
ProductRouter.get("/listPdf", listPdf);

export default ProductRouter;
