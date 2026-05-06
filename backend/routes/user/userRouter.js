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
  resetPassword,
  verifyResentOtp,
} from "../../controllers/user/userController.js";
import userAuth from "../../middleware/user/userAuth.js";
import {
  createEnquiry,
  listAllEnquiry,
  listEnquiry,
  updateStatus,
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
//access ally staff || admin
userRouter.post("/updateStatus", updateStatus);
//............................
userRouter.get("/listUser", listUser);
userRouter.post("/deleteUser", deleteUser);

//reset otp
userRouter.post("/resetOtp", userAuth, resetPassword)
userRouter.post("/verifyResentOtp", userAuth, verifyResentOtp)

export default userRouter;
