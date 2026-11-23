import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./dataBase/ConnectDB.js";
import userRouter from "./routes/user/userRouter.js";
import workersRouter from "./routes/workers/workersRoutes.js";
import router from "./routes/user/getUserData.js";
import eventManagementRouter from "./routes/eventManagement/eventManagementRoutes.js";
import ProductRouter from "./routes/eventManagement/productRoutes.js";
import connectCloudinary from "./config/cloudinary.js";
import dns from "dns";
import adminRouter from "./routes/admin/adminRoutes.js";
import bookingRouter from "./routes/bookingRoute.js";
import staffsRouter from "./routes/staffs/staffsRoutes.js";
import path from "path";

try {
  dns.setServers(["1.1.1.1", "8.8.8.8"]);
} catch (e) {
  // Ignore DNS override errors in restricted container environments
}

const app = express();

dotenv.config();

const __dirname = path.resolve();

const PORT = process.env.PORT || 4000;

//middleware

const allowOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5175",
];

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: (origin, callback) => {
      // allow requests with no origin (like mobile apps, curl, or same-origin)
      if (!origin) return callback(null, true);
      if (
        allowOrigins.includes(origin) ||
        origin.endsWith(".vercel.app") ||
        process.env.NODE_ENV !== "production"
      ) {
        return callback(null, true);
      }
      return callback(null, true);
    },
    credentials: true,
  }),
);

// make uploads folder public
app.use("/uploads", express.static("uploads"));

//api end point

app.use("/api/user", userRouter);
app.use("/api/workers", workersRouter);
app.use("/api/userData", router);
app.use("/api/eventManagement", eventManagementRouter);
app.use("/api/product", ProductRouter);
app.use("/api/admin", adminRouter);
app.use("/api/booking", bookingRouter);
app.use("/api/staffs", staffsRouter);

try {
  await connectDB();
} catch (err) {
  console.error("Database connection error:", err);
}

try {
  await connectCloudinary();
} catch (err) {
  console.error("Cloudinary connection error:", err);
}

if (process.env.NODE_ENV === "production" && !process.env.VERCEL) {
  app.use("/app", express.static(path.join(__dirname, "../frontend/dist")));
  app.get("/app/{*splat}", (_, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });

  app.use("/admin", express.static(path.join(__dirname, "../admin/dist")));
  app.get("/admin/{*splat}", (_, res) => {
    res.sendFile(path.join(__dirname, "../admin/dist/index.html"));
  });

  app.use("/staff", express.static(path.join(__dirname, "../staff/dist")));
  app.get("/staff/{*splat}", (_, res) => {
    res.sendFile(path.join(__dirname, "../staff/dist/index.html"));
  });
}

if (process.env.NODE_ENV !== "production" || !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

export default app;
