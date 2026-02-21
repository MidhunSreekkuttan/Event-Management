import eventManagementModel from "../../dataBase/models/eventManagement/eventManagementModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const Register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const alredyExist = await eventManagementModel.findOne({ email });
    if (alredyExist) {
      return res.json({
        success: false,
        message: "You Alredy Have An Accound",
      });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Plz Enter More Than 8 Digit password",
      });
    }
    const hashPassword = await bcrypt.hash(password, 10);

    const newuser = new eventManagementModel({
      name,
      email,
      password: hashPassword,
    });

    const user = await newuser.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("EventManagementRegisteration", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json({ success: true, message: "Registeration Successful" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email) {
      return res.json({ success: false, message: "Enter Your Email" });
    }
    if (!password) {
      return res.json({ success: false, message: "Enter Your Password" });
    }

    const user = await eventManagementModel.findOne({ email });
    if (!user) {
      return res.json({
        success: false,
        message: "user Not Found Login Again",
      });
    }
    const isMAtch = await bcrypt.compare(password, user.password);
    if (!isMAtch) {
      return res.json({ success: false, message: "Incorect Password" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("EventManagementLogin", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    });
    return res.json({ success: true, message: "User login Successful" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const Logout = async (req, res) => {
  res.clearCookie("EventManagementLogin", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
  });

  return res.json({ success: true, message: "Logout Successful" });
};

export const sendVerifyOtp = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await eventManagementModel.findById(userId);

    if (user.isAccountVerified) {
      return res.json({
        success: false,
        message: "Your Account Already Verified",
      });
    }

    const otp = String(Math.floor(100000 + Math.random() * 900000));

    user.verifyOtp = otp;
    user.verifyOtpExpire = Date.now() + 2 * 60 * 60 * 1000;

    await user.save();

    return res.json({
      success: true,
      message: "Verification OTP Sent to your Email",
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const verifyEmail = async (req, res) => {
  try {
    const userId = req.user.id;
    const { otp } = req.body;
    if (!userId) {
      return res.json({ success: false, message: "UserId is missing" });
    }
    if (!otp) {
      return res.json({ success: false, message: "OTP is missing" });
    }
    const user = await eventManagementModel.findById(userId);
    if (!user) {
      return res.json({ success: false, message: "User Not Found" });
    }
    if (user.verifyOtp === "" || user.verifyOtp !== otp) {
      return res.json({ success: false, message: "Invalid OTP" });
    }
    if (user.verifyOtpExpire < Date.now()) {
      return res.json({ success: false, message: "OTP Expired" });
    }

    ((user.isAccountVerified = true),
      (user.verifyOtp = ""),
      (user.verifyOtpExpire = 0));
    await user.save();

    return res.json({
      success: true,
      message: "Email Verification Is Successful",
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const isAuthendicated = async (req, res) => {
  try {
    return res.json({ success: true });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
