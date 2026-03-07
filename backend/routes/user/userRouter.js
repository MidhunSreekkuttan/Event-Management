import express from "express";
import {
  register,
  login,
  logout,
  sendVerifyOtp,
  verifyEmail,
  isAuthendicated,
  listUser,
  deleteUser,
} from "../../controllers/user/userController.js";
import userAuth from "../../middleware/user/userAuth.js";
import {
  createEnquiry,
  listAllEnquiry,
  listEnquiry,
} from "../../controllers/user/enquiryController.js";

const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/logout", logout);
userRouter.post("/sendVerifyOtp", userAuth, sendVerifyOtp);
userRouter.post("/verifyEmail", userAuth, verifyEmail);
userRouter.get("/isAuth", userAuth, isAuthendicated);
userRouter.post("/enquiry", userAuth, createEnquiry);
userRouter.get("/getEnquiry", userAuth, listEnquiry);
userRouter.get("/getAllEnquiry", listAllEnquiry);
userRouter.get("/listUser", listUser);
userRouter.post("/deleteUser", deleteUser);

export default userRouter;
