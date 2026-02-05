import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./dataBase/ConnectDB.js";
import userRouter from "./routes/user/userRouter.js";
import workersRouter from "./routes/workers/workersRoutes.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 4000;

//middleware

app.use(express.json());
app.use(cookieParser());
app.use(cors());

//api end point

app.use("/api/user", userRouter);
app.use("/api/workers", workersRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

await connectDB();
