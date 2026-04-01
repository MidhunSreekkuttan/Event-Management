import express from "express";
import {
  addProduct,
  listProduct,
  ownerListProduct,
  removeProduct,
  singleProduct,
  updateProduct
} from "../../controllers/eventManagement/productController.js";
import upload from "../../middleware/eventManagement/multer.js";
import EventManagementAuth from "../../middleware/eventManagement/eventManagementAuth.js";
import {
  listPdf,
  uploadPdf,
} from "../../controllers/eventManagement/companyRegistrationController.js";

const ProductRouter = express.Router();

// ADD PRODUCT
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

// UPDATE PRODUCT
ProductRouter.put(
  "/updateProduct/:id",
  EventManagementAuth,
  upload.fields([
    { name: "image1", maxCount: 1},
    { name: "image2", maxCount: 1},
    { name: "image3", maxCount: 1},
    { name: "image4", maxCount: 1},
  ]),
  updateProduct
);

//OWNER LIST
ProductRouter.get("/ownerListProduct", EventManagementAuth, ownerListProduct);
//REMOVE LIST
ProductRouter.post("/removeProduct", EventManagementAuth, removeProduct);
// SINGLE PRODUCT
ProductRouter.get("/singleProduct/:id", EventManagementAuth, singleProduct);

//route for public user
ProductRouter.get("/listProduct", listProduct);

//upload pdf
ProductRouter.post(
  "/uploadDocument",
  EventManagementAuth,
  upload.fields([
    { name: "businessRegistrationFile", maxCount: 1 },
    { name: "GSTVerificationFile", maxCount: 1 },
  ]),
  uploadPdf,
);
ProductRouter.get("/listDocument", listPdf);

export default ProductRouter;
