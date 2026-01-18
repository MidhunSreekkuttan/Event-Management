import mongoose from "mongoose";
import dotenv from "dotenv";

const connectDB = async () => {
  await mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Data Base is Connected");
  });
};

export default connectDB;
