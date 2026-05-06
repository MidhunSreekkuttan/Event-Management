import express from "express";
import {
  deleteEventManagementUser,
  isAuthendicated,
  listEventManagementUser,
  Login,
  Logout,
  Register,
  resendVerifyOtp,
  sendVerifyOtp,
  verifyEmail,
  verifyResetOtp,
} from "../../controllers/eventManagement/eventManagementController.js";
import EventManagementAuth from "../../middleware/eventManagement/eventManagementAuth.js";
import { getEventManagementData, getEventManagementDataAdmin } from '../../controllers/eventManagement/eventManagementAuth.js'

const eventManagementRouter = express.Router();

eventManagementRouter.post("/register", Register);
eventManagementRouter.post("/login", Login);
eventManagementRouter.post("/logout", Logout);
eventManagementRouter.post(
  "/sendVerifyOtp",
  EventManagementAuth,
  sendVerifyOtp,
);
//resent verify otp
eventManagementRouter.post("/resendVerifyOtp", resendVerifyOtp)
eventManagementRouter.post("/verifyResetOtp", verifyResetOtp)

eventManagementRouter.post("/verifyEmail", EventManagementAuth, verifyEmail);
eventManagementRouter.get("/isAuth", EventManagementAuth, isAuthendicated);
eventManagementRouter.get(
  "/getUserData",
  EventManagementAuth,
  getEventManagementData,
);
//for admin get data
eventManagementRouter.get("/getUserDataAdmin", getEventManagementDataAdmin)

eventManagementRouter.get("/userList", listEventManagementUser);
eventManagementRouter.post("/deleteuser", deleteEventManagementUser);

export default eventManagementRouter;
