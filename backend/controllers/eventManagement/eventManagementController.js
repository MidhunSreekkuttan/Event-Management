import eventManagementModel from "../../dataBase/models/eventManagement/eventManagementModel.js";
import validator from 'validator'
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { eventManagement, otpMail } from "../../config/emailTemplate.js";
import welcomeMessage from "../../config/nodemailer.js";

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

    if (!validator.isEmail(email, {
      allow_utf8_local_part: false,
      domain_specific_validation: true,
      host_whitelist: ["gmail.com", "outlook.com"]
    })) {
      return res.json({ success: false, message: "Invalid email address" })
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Your password must contain at least 8 charectors",
      });
    }
    if (!/[A-Z]/.test(password)) {
      return res.json({ success: false, message: "Your password must contain at least one uppercase" })
    }
    if (!/[a-z]/.test(password)) {
      return res.json({ success: false, message: "Your password must contain at least one lowercase" })
    }
    if (!/[0-9]/.test(password) || password.match(/[0-9]/g).length < 3) {
      return res.json({ success: false, message: "Your password must contain at least three numbers" })
    }
    if (!/[!@#$%^&*]/.test(password)) {
      return res.json({ success: false, message: "Your password must contain at least one symbel" })
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

    const mailOptions = {
      from: `"Adhithi"<${process.env.NO_REPLAY_EMAIL}>`,
      to: email,
      subject: "Welcome To your Destiny",
      html: eventManagement(name),
    };

    await welcomeMessage.sendMail(mailOptions);

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
    return res.json({
      success: true,
      token: token,
      isAccountVerified: user.isAccountVerified,
      message: "User login Successful",
    });
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

    const mailOption = {
      from: `"Adhithi"<${process.env.NO_REPLAY_EMAIL}>`,
      to: user.email,
      subject: "Verify Using This OTP",
      html: otpMail(user.name, otp),
    };

    await welcomeMessage.sendMail(mailOption);

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

export const listEventManagementUser = async (req, res) => {
  try {
    const eventManagementUserList = await eventManagementModel.find({});
    res.json({ success: true, eventManagementUserList });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export const deleteEventManagementUser = async (req, res) => {
  try {
    await eventManagementModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Event Management User deleted" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//resent verify otp
export const resendVerifyOtp = async (req, res) => {

  try {

    const { email } = req.body

    const user = await eventManagementModel.findOne({ email })
    if (!user) {
      return res.json({ success: false, message: "user not found" })
    }

    const otp = String(Math.floor(100000 + Math.random() * 900000));

    user.verifyOtp = otp;
    user.verifyOtpExpire = Date.now() + 2 * 60 * 60 * 1000;

    await user.save();

    const mailOption = {
      from: `"EventManagement"<${process.env.NO_REPLAY_EMAIL}>`,
      to: user.email,
      subject: "Reset password using this OTP",
      html: otpMail(user.name, otp),
    };

    await welcomeMessage.sendMail(mailOption);

    return res.json({ success: true, message: "Reset OTP send Successful" })

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }

}

export const verifyResetOtp = async (req, res) => {

  try {

    const { email, otp, newPassword } = req.body

    const user = await eventManagementModel.findOneAndUpdate({ email })
    if (!user) {
      return res.json({ success: false, message: "user not found" })
    }

    if (!otp) {
      return res.json({ success: false, message: "Otp is requered" })
    }
    if (user.verifyOtp === "" || user.verifyOtp !== otp) {
      return res.json({ success: false, message: "something went wrong" })
    }
    if (!newPassword) {
      return res.json({ success: false, message: "passwordis requered" })
    }
    if (!/[A-Z]/.test(newPassword)) {
      return res.json({ success: false, message: "Password must have atleast a uppercase charecter" })
    }
    if (!/[a-z]/.test(newPassword)) {
      return res.json({ success: false, message: "Password must have atleast a lowercase charecter" })
    }
    if (!/[0-9]/.test(newPassword) || newPassword.match(/[0-9]/g).length < 3) {
      return res.json({ success: false, message: "Password must have atleast three number" })
    }
    if (!/[!@#$%^&*]/.test(newPassword)) {
      return res.json({ success: false, message: "Password must have atleast a symbol" })
    }

    const hashPassword = await bcrypt.hash(newPassword, 10)
    user.password = hashPassword

    user.verifyOtp = ""
    user.verifyOtpExpire = 0

    await user.save()

    res.json({ success: true, message: "new password update Successful" })

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }

}