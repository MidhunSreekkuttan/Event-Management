import express from "express";
import {
  Login,
  Logout,
  Register,
  sendVerifyOtp,
  verifyEmail,
} from "../../controllers/eventManagement/eventManagementController.js";
import EventManagementAuth from "../../middleware/eventManagement/eventManagementAuth.js";

const eventManagementRouter = express.Router();

eventManagementRouter.post("/register", Register);
eventManagementRouter.post("/login", Login);
eventManagementRouter.post("/logout", Logout);
eventManagementRouter.post(
  "/sendVerifyOtp",
  EventManagementAuth,
  sendVerifyOtp,
);
eventManagementRouter.post("/verifyEmail", EventManagementAuth, verifyEmail);

export default eventManagementRouter;
