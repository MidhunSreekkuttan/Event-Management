import staffsModel from "../../dataBase/models/staffs/staffsmodel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name) {
      return res.json({ success: false, message: "name is requied" });
    }
    if (!email) {
      return res.json({ success: false, message: "email is requied" });
    }
    if (!password) {
      return res.json({ success: false, message: "password is requied" });
    }

    const existuser = await staffsModel.findOne({ email });

    if (existuser) {
      return res.json({ success: false, message: "User Already Existed" });
    }

    if (password.length < 8) {
      return res.json({ success: false, message: "minimum 8 digit required" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newuser = new staffsModel({
      name,
      email,
      password: hashPassword,
    });

    const user = await newuser.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.cookie("staffsRegister", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.json({ success: true, message: "Staff Registered" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.json({ success: false, message: "Email Requiered" });
    }

    if (!password) {
      return res.json({ success: false, message: "password Requiered" });
    }

    const user = await staffsModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({ success: false, message: "Incorrect Password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.cookie("staffsLogin", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.json({ success: true, message: "Staff Logged In" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("staffsLogin", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.json({ success: true, message: "Staff Logged Out" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export const getAuth = async (req, res) => {
  try {
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export const getStaffData = async (req, res) => {
  try {
    const userID = req.userId;

    const user = await staffsModel.findById(userID);
    res.json({ success: true, user });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export const getAllStaffs = async (req, res) => {
  try {
    const response = await staffsModel.find({});

    if (response) {
      return res.json({ success: true, response });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export const deleteStaff = async (req, res) => {

  try {

    const { staffId } = req.body

    const removeStaff = await staffsModel.findByIdAndDelete(staffId)

    if (!removeStaff) {
      return res.json({ success: false, message: "staff not fount" })
    }

    return res.json({ success: true, message: "staff removed" })

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }

}