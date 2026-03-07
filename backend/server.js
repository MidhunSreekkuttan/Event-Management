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

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();

dotenv.config();

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
    origin: allowOrigins,
    credentials: true,
  }),
);

//api end point

app.use("/api/user", userRouter);
app.use("/api/workers", workersRouter);
app.use("/api/userData", router);
app.use("/api/eventManagement", eventManagementRouter);
app.use("/api/product", ProductRouter);
app.use("/api/admin", adminRouter);
app.use("/api/booking", bookingRouter);
app.use("/api/staffs/", staffsRouter);

await connectDB();

await connectCloudinary();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
