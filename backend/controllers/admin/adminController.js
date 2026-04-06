import jwt from "jsonwebtoken";

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