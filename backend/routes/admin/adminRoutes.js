import express from "express";
import { deleteStaff, getAllStaffs } from "../../controllers/staffs/staffsController.js";
import adminAuth from "../../middleware/admin/adminAuth.js";
import { adminLogin, changeStatus, changeWorkersStatus, getWorkerDetails, isAuth } from "../../controllers/admin/adminController.js";

const adminRouter = express.Router();

adminRouter.post("/login", adminLogin);
adminRouter.get("/isAuth", adminAuth, isAuth)
//getting all list of staffs
adminRouter.get("/listStaffs", getAllStaffs);
adminRouter.post("/removeStaff", deleteStaff)
//change status
adminRouter.post("/changeStatus", changeStatus)
adminRouter.post("/changeWorkersStatus", changeWorkersStatus)
adminRouter.get("/getWorkerDetails/:userId", getWorkerDetails)

export default adminRouter;
