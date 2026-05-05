import express from "express";
import {
  allOrder,
  allOrderEventManagement,
  getReceipt,
  placebooking,
  placebookingRazorpay,
  singleBookingData,
  updateBooking,
  userBooking,
  verifyRazorpay,
} from "../controllers/bookingController.js";
import EventManagementAuth from "../middleware/eventManagement/eventManagementAuth.js";
import adminAuth from "../middleware/admin/adminAuth.js";
import userAuth from "../middleware/user/userAuth.js";

const bookingRouter = express.Router();

//For user
bookingRouter.post("/placingBooking", userAuth, placebooking);
bookingRouter.post("/placebookingRazorpay", userAuth, placebookingRazorpay);
bookingRouter.post("/verifyRazorpay", userAuth, verifyRazorpay);
bookingRouter.get("/getReceipt/:productId", getReceipt)
//For Admin
bookingRouter.get("/allBookings", allOrder);
//For event management panel
bookingRouter.get(
  "/allOrderEventManagement",
  EventManagementAuth,
  allOrderEventManagement,
);
//single booking data
bookingRouter.get("/singleBookingData/:bookingid", singleBookingData)
//For user
bookingRouter.get("/userBooking", userAuth, userBooking);
//update status for event managemnet panel
bookingRouter.post("/updateStatus", updateBooking);

export default bookingRouter;
