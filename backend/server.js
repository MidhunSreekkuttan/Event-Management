import express from "express";
import dotenv, { config } from "dotenv";
import connectDB from "./dataBase/ConnectDB.js";

const app = express();

dotenv/config()

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => res.send("Hello Makkaleeee"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

await connectDB();
