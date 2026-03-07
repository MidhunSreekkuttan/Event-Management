import express from "express";
import {
  getAuth,
  login,
  logout,
  register,
} from "../../controllers/staffs/staffsController.js";
import staffsAuth from "../../middleware/staffs/staffsAuth.js";

const staffsRouter = express.Router();

staffsRouter.post("/register", register);
staffsRouter.post("/login", login);
staffsRouter.post("/logout", logout);
staffsRouter.get("/getAuth", staffsAuth, getAuth);


export default staffsRouter;
