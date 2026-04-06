import express from "express";
import { getAllStaffs } from "../../controllers/staffs/staffsController.js";
import adminAuth from "../../middleware/admin/adminAuth.js";
import { adminLogin, isAuth } from "../../controllers/admin/adminController.js";

const adminRouter = express.Router();

adminRouter.post("/login", adminLogin);
adminRouter.get("/isAuth", adminAuth, isAuth)
//getting all list of staffs
adminRouter.get("/listStaffs", getAllStaffs);

export default adminRouter;
