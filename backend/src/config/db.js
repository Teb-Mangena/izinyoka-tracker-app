import mongoose from "mongoose";
import { ENV } from "./env.js";

export async function connectDB () {
  try {
    await mongoose.connect(ENV.MONGO_URI);

    console.log("DB connected successfully");
  } catch (error) {
    process.exit(1);
    console.log("Error connecting to DB", error);
  }
}