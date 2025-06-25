import mongoose from "mongoose";
import 'dotenv/config';

if (!process.env.MONGODB_URI) {
  throw new Error("Please provide MONGODB_URI in the .env file");
}

async function connnectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connection successful");
  } catch (error) {
    console.error("MongoDB connect error:", error);
    process.exit(1);
  }
}

export default connnectDB;
