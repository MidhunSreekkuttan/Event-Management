import express from "express";
import userAuth from "../../middleware/user/userAuth.js";
import getUserData from "../../controllers/user/userAuth.js";

const router = express.Router();

router.get("/getUserData", userAuth, getUserData);

export default router;
