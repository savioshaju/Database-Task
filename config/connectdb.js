import mongoose from "mongoose";

export const connectDatabase = () => {
  try {
    mongoose
      .connect(process.env.MONGODB_URI)
      .then(() => {
        console.log("✅ Database connected successfully!");
      })
      .catch((err) => {
        console.error("❌ Database connection failed:", err.message);
      });
  } catch (error) {
    console.error("⚠️ Unexpected error while connecting to database:", error.message);
  }
};
