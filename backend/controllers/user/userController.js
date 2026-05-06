import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../../dataBase/models/user/userModel.js";
import welcomeMessage from "../../config/nodemailer.js";
import { otpMail, welcomeMail } from "../../config/emailTemplate.js";
import validator from 'validator'

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const alredyExist = await userModel.findOne({ email });
    if (alredyExist) {
      return res.json({ success: false, message: "User Already exist" });
    }

    if (!validator.isEmail(email, {
      allow_utf8_local_part: false,
      domain_specific_validation: true,
      host_whitelist: ["gmail.com", "yahoo.com", "outlook.com"]
    })) {
      return res.json({ success: false, message: "Invalid email" })
    }

    if (password.length < 8) {
      return res.json({ success: false, message: "your password must contain at least 8 charectors" })
    }
    if (!/[A-Z]/.test(password)) {
      return res.json({ success: false, message: "your password must contain at least one uppercase letter" })
    }
    if (!/[a-z]/.test(password)) {
      return res.json({ success: false, message: "your password must contain at least one lowercase letter" })
    }
    if (!/[0-9]/.test(password) || password.match(/[0-9]/g).length < 3) {
      return res.json({ success: false, message: "your password must contain at least Three number" })
    }
    if (!/[!@#$%^&*]/.test(password)) {
      return res.json({ success: false, message: "your password must contain at least one symbel number" })
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

    const mailOption = {
      from: `"Adhithi" <${process.env.NO_REPLAY_EMAIL}>`,
      to: email,
      subject: "Welcome to Our Web Page",
      html: welcomeMail(name),
    };
    await welcomeMessage.sendMail(mailOption);

    return res.json({ success: true, message: "User register Successfull" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.json({ success: false, message: "Enter Email" });
    }
    if (!password) {
      return res.json({ success: false, message: "Enter Password" });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User Not Found pz Sign up" });
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
      });
    } else {
      return res.json({ success: false, message: "Incorrect Password" });
    }

    return res.json({
      success: true,
      isAccountVerified: user.isAccountVerified,
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("UserLoginToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    });

    return res.json({ success: true, message: "User Logout" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const sendVerifyOtp = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await userModel.findById(userId);

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
      from: `"Adhithi" <${process.env.NO_REPLAY_EMAIL}>`,
      to: user.email,
      subject: "Your OTP",
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
    const user = await userModel.findById(userId);
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

export const listUser = async (req, res) => {
  try {
    const userList = await userModel.find({});
    res.json({ success: true, userList });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "User Deleted" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export const resetPassword = async (req, res) => {

  try {

    const { email } = req.body
    if (!email) {
      return res.json({ success: false, message: "email not found" })
    }

    const userData = await userModel.findOne({ email })
    if (!userData) {
      return res.json({ success: false, message: "user not found" })
    }
    const newOtp = String(Math.floor(100000 + Math.random() * 900000));

    userData.verifyOtp = newOtp;
    userData.verifyOtpExpire = Date.now() + 2 * 60 * 60 * 1000;

    await userData.save();

    const mailOption = {
      from: `"Adhithi" <${process.env.NO_REPLAY_EMAIL}>`,
      to: userData.email,
      subject: "Your Reset Verify OTP",
      html: otpMail(userData.name, newOtp),
    };

    await welcomeMessage.sendMail(mailOption);

    res.json({ success: true, message: "new otp sent successfuly" })

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }

}

export const verifyResentOtp = async (req, res) => {

  try {

    const { newOtp, newPassword, email } = req.body

    const user = await userModel.findOneAndUpdate({ email })
    if (!user) {
      return res.json({ success: false, message: "user not found" })
    }

    if (!newOtp) {
      return res.json({ success: false, message: "otp is requerd" })
    }
    if (user.verifyOtp === "" || user.verifyOtp !== newOtp) {
      return res.json({ success: false, message: "somthing went wrong" })
    }

    if (!newPassword) {
      return res.json({ success: false, message: "new password is requered" })
    }
    if (!/[A-Z]/.test(newPassword)) {
      return res.json({ success: false, message: "Password must have atleast a uppercase charecter" })
    }
    if (!/[a-z]/.test(newPassword)) {
      return res.json({ success: false, message: "Password must have atleast a lowercase charecter" })
    }
    if (!/[0-9]/.test(newPassword) || newPassword.match(/[0-9]/g).length < 3) {
      return res.json({ success: false, message: "Password must have atleast three numbers" })
    }
    if (!/[!@#$%^&*]/.test(newPassword)) {
      return res.json({ success: false, message: "Password must have atleast a  symbol" })
    }

    const hashpassword = await bcrypt.hash(newPassword, 10)

    user.password = hashpassword
    user.verifyOtp = ""
    user.verifyOtpExpire = 0
    await user.save()

    return res.json({ success: true, message: "Password chamge successfuly" })

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }

}