import dotenv from "dotenv";
import connectDB from "./db/index.js";
const port = process.env.PORT || 3000;

dotenv.config({
  path: "./env",
});

connectDB();
