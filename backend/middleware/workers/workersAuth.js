import jwt from "jsonwebtoken";

const workersAuth = async (req, res, next) => {
  try {
    const { WorkersLoginToken } = req.cookies;
    if (!WorkersLoginToken) {
      return res.json({
        succes: false,
        message: "Not Autherised Plz Login Again",
      });
    }
    const decodeToken = jwt.verify(WorkersLoginToken, process.env.JWT_SECRET);
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

export default workersAuth;
