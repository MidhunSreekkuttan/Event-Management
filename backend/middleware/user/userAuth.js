import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  try {
    const { UserLoginToken } = req.cookies;
    if (!UserLoginToken) {
      return res.json({
        succes: false,
        message: "Not Autherised Plz Login Again",
      });
    }
    const decodeToken = jwt.verify(UserLoginToken, process.env.JWT_SECRET);
    if (decodeToken.id) {
      req.user = { id: decodeToken.id };
      req.userId = decodeToken.id;
    } else {
      return res.json({ succes: false, message: "Not Autherised Login Again" });
    }
    next();
  } catch (error) {
    res.json({ succes: false, message: error.message });
  }
};

export default userAuth;
