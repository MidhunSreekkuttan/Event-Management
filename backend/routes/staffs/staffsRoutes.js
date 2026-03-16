import express from "express";
import {
  getAuth,
  login,
  logout,
  register,
} from "../../controllers/staffs/staffsController.js";
import staffsAuth from "../../middleware/staffs/staffsAuth.js";
import {
  getResponse,
  sendResponse,
} from "../../controllers/staffs/responseController.js";
import userAuth from "../../middleware/user/userAuth.js";

const staffsRouter = express.Router();

staffsRouter.post("/register", register);
staffsRouter.post("/login", login);
staffsRouter.post("/logout", logout);
staffsRouter.get("/getAuth", staffsAuth, getAuth);
staffsRouter.post("/sendResponse", sendResponse);
staffsRouter.get("/getResponse", userAuth, getResponse);

export default staffsRouter;
