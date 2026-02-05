import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const welcomeMessage = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NO_REPLAY_EMAIL,
    pass: process.env.NO_REPLAY_PASSWORD,
  },
});

export default welcomeMessage;
