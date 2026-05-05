import jwt from "jsonwebtoken";
import eventManagementModel from "../../dataBase/models/eventManagement/eventManagementModel.js";

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({ success: false, message: "Fill All Empty space" });
    }

    if (email === process.env.ADMIN_EMAIL) {
    } else {
      return res.json({ success: false, message: "Admin Not Found" });
    }
    if (password === process.env.ADMIN_PASSWORD) {
    } else {
      return res.json({ success: false, message: "Password Incorrect" });
    }
    const token = jwt.sign(email + password, process.env.JWT_SECRET);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export const isAuth = async (req, res) => {

  try {

    return res.json({ success: true })

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }

}

export const changeStatus = async (req, res) => {

  try {

    const { eventManagerId, status } = req.body

    if (!eventManagerId) {
      return res.json({ success: false, message: "missing details" })
    }

    const changeStatusCaps = String(status).toLowerCase().trim()
    if (!changeStatusCaps) {
      return res.json({ success: false, message: "missing status" })
    }

    const getDocument = await eventManagementModel.findByIdAndUpdate(
      eventManagerId,
      { isAdminVerified: changeStatusCaps }
    )
    if (!getDocument) {
      return res.json({ success: false, message: "document not found" })
    }

    res.json({ success: true, message: "Status changed succfully" })

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }

}