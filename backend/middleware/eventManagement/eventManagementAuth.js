import jwt from "jsonwebtoken";

const EventManagementAuth = async (req, res, next) => {
  try {
    const { EventManagementLogin } = req.cookies;
    if (!EventManagementLogin) {
      return res.json({
        succes: false,
        message: "Not Autherised Plz Login Again",
      });
    }
    const decodeToken = jwt.verify(
      EventManagementLogin,
      process.env.JWT_SECRET,
    );
    if (decodeToken.id) {
      req.user = { id: decodeToken.id };
    } else {
      return res.json({ succes: false, message: "Not Autherised Login Again" });
    }
    next();
  } catch (error) {
    res.json({ succes: false, message: error.message });
  }
};

export default EventManagementAuth;
