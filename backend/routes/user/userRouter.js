import express from "express";
import {
  register,
  login,
  logout,
  sendVerifyOtp,
  verifyEmail,
  isAuthendicated,
} from "../../controllers/user/userController.js";
import userAuth from "../../middleware/user/userAuth.js";

const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/logout", logout);
userRouter.post("/sendVerifyOtp", userAuth, sendVerifyOtp);
userRouter.post("/verifyEmail", userAuth, verifyEmail);
userRouter.get("/isAuth", userAuth, isAuthendicated);

export default userRouter;
