import jwt from "jsonwebtoken";

const staffsAuth = async (req, res, next) => {
  try {
    const { staffsLogin } = req.cookies;

    if (!staffsLogin) {
      return res.json({
        success: false,
        message: "not autherised",
      });
    }

    const decodeToken = jwt.verify(staffsLogin, process.env.JWT_SECRET);

    if (decodeToken.id) {
      req.userId = decodeToken.id;
      req.user = { id: decodeToken.id };
    } else {
      res.json({
        success: false,
        message: "Not not autherised login again",
      });
    }

    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default staffsAuth;
