import express from "express";
import {
  deleteEventManagementUser,
  isAuthendicated,
  listEventManagementUser,
  Login,
  Logout,
  Register,
  sendVerifyOtp,
  verifyEmail,
} from "../../controllers/eventManagement/eventManagementController.js";
import EventManagementAuth from "../../middleware/eventManagement/eventManagementAuth.js";
import getEventManagementData from "../../controllers/eventManagement/eventManagementAuth.js";

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
eventManagementRouter.get("/isAuth", EventManagementAuth, isAuthendicated);
eventManagementRouter.get(
  "/getUserData",
  EventManagementAuth,
  getEventManagementData,
);
eventManagementRouter.get("/userList", listEventManagementUser);
eventManagementRouter.post("/deleteuser", deleteEventManagementUser);

export default eventManagementRouter;
