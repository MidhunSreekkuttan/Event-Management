import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import workersModel from "../dataBase/models/workers/workersModel.js";
import welcomeMessage from "../config/nodemailer.js";
import { otpMail, welcomeMail } from "../config/emailTemplate.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const alredyExist = await workersModel.findOne({ email });
    if (alredyExist) {
      return res.json({ succes: false, message: "User Already exist" });
    }
    if (password.length < 8) {
      return res.json({
        succes: false,
        message: "Plz Enter more than 8 digits",
      });
    }
    const hashpassword = await bcrypt.hash(password, 10);

    const newUser = new workersModel({
      name,
      email,
      password: hashpassword,
    });
    const user = await newUser.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("WorkersRegisterationToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    const mailOption = {
      from: `"Adhithi" <${process.env.NO_REPLAY_EMAIL}>`,
      to: email,
      subject: "Welcome to Our Web Page",
      html: welcomeMail(name),
    };
    await welcomeMessage.sendMail(mailOption);

    return res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ succes: false, message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.json({ succes: false, message: "Enter Email" });
    }
    if (!password) {
      return res.json({ succes: false, message: "Enter Password" });
    }

    const user = await workersModel.findOne({ email });
    if (!user) {
      return res.json({ succes: false, message: "User Not Found" });
    }
    if (!email) {
      return res.json({ succes: false, message: "User Not Found pz Sign up" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

      res.cookie("WorkersLoginToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      });
    } else {
      return res.json({ succes: false, message: "Incorrect Password" });
    }

    return res.json({ succes: true });
  } catch (error) {
    res.json({ succes: false, message: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("WorkersLoginToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    });
    return res.json({ succes: true, message: "User Logout" });
  } catch (error) {
    res.json({ succes: false, message: error.message });
  }
};

export const sendVerifyOtp = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await workersModel.findById(userId);

    if (user.isAccountVerified) {
      return res.json({
        succes: false,
        message: "Your Account Already Verified",
      });
    }

    const otp = String(Math.floor(100000 + Math.random() * 900000));

    user.verifyOtp = otp;
    user.verifyOtpExpire = Date.now() + 2 * 60 * 60 * 1000;

    await user.save();

    const mailOption = {
      from: `"Adhithi" <${process.env.NO_REPLAY_EMAIL}>`,
      to: user.email,
      subject: "Your OTP",
      html: otpMail(user.name, otp),
    };
    await welcomeMessage.sendMail(mailOption);

    return res.json({
      succes: true,
      message: "Verification OTP Sent to your Email",
    });
  } catch (error) {
    res.json({ succes: false, message: error.message });
  }
};

export const verifyEmail = async (req, res) => {
  try {
    const userId = req.user.id;
    const { otp } = req.body;
    if (!userId) {
      return res.json({ succes: false, message: "UserId is missing" });
    }
    if (!otp) {
      return res.json({ succes: false, message: "OTP is missing" });
    }
    const user = await workersModel.findById(userId);
    if (!user) {
      return res.json({ succes: false, message: "User Not Found" });
    }
    if (user.verifyOtp === "" || user.verifyOtp !== otp) {
      return res.json({ succes: false, message: "Invalid OTP" });
    }
    if (user.verifyOtpExpire < Date.now()) {
      return res.json({ succes: false, message: "OTP Expired" });
    }

    ((user.isAccountVerified = true),
      (user.verifyOtp = ""),
      (user.verifyOtpExpire = 0));
    await user.save();
    return res.json({
      succes: true,
      message: "Email Verification Is Successful",
    });
  } catch (error) {
    res.json({ succes: false, message: error.message });
  }
};
