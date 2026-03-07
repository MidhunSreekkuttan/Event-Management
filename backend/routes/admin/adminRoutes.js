import express from "express";
import adminLogin from "../../controllers/admin/adminController.js";
import { getAllStaffs } from "../../controllers/staffs/staffsController.js";
import adminAuth from "../../middleware/admin/adminAuth.js";

const adminRouter = express.Router();

adminRouter.post("/login", adminLogin);
//getting all list of staffs
adminRouter.get("/listStaffs", getAllStaffs);

export default adminRouter;
