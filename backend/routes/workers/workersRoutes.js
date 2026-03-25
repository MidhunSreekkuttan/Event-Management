import express from "express";
import {
  login,
  logout,
  register,
  sendVerifyOtp,
  verifyEmail,
} from "../../controllers/workers/workersController.js";
import workersAuth from "../../middleware/workers/workersAuth.js";
import upload from "../../middleware/eventManagement/multer.js";
import workersRegistration from "../../controllers/workers/workersRegistration.js";

const workersRouter = express.Router();

workersRouter.post("/register", register);
workersRouter.post("/login", login);
workersRouter.post("/logout", logout);
workersRouter.post("/sendVerifyOtp", workersAuth, sendVerifyOtp);
workersRouter.post("/verifyEmail", workersAuth, verifyEmail);

//upload registration
workersRouter.post(
  "/uploadFile",
  upload.fields([
    { name: "uploadIdProof", maxCount: 1 },
    { name: "uploadWorkPermit", maxCount: 1 },
    { name: "uploadAddressProof", maxCount: 1 },
    { name: "uploadResume", maxCount: 1 },
  ]),
  workersRegistration,
);

export default workersRouter;
