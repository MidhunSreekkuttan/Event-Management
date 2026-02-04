import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../dataBase/models/user/userModel.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const alredyExist = await userModel.findOne({ email });
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

    const newUser = new userModel({
      name,
      email,
      password: hashpassword,
    });
    const user = await newUser.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("UserRegisterationToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

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

    const user = await userModel.findOne({ email });
    if (!email) {
      return res.json({ succes: false, message: "User Not Found pz Sign up" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

      res.cookie("UserLoginToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });
    } else {
      return res.json({ succes: false, message: "Incorrect Password" });
    }

    return res.json({ succes: true });
  } catch (error) {
    res.json({ succes: false, message: error.message });
  }
};
