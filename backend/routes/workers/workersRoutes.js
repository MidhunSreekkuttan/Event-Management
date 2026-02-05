import express from "express";
import {
  login,
  logout,
  register,
  sendVerifyOtp,
  verifyEmail,
} from "../../controllers/workersController.js";
import workersAuth from "../../middleware/workers/workersAuth.js";

const workersRouter = express.Router();

workersRouter.post("/register", register);
workersRouter.post("/login", login);
workersRouter.post("/logout", logout);
workersRouter.post("/sendVerifyOtp", workersAuth, sendVerifyOtp);
workersRouter.post("/verifyEmail", workersAuth, verifyEmail);

export default workersRouter;
