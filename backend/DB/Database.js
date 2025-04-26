import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

export const connectDB = async (req, res) => {
  const db = process.env.DATABASE.replace(
    "<PASSWORD>",
    process.env.DATABASE_PASSWORD
  );

  const { connection } = await mongoose.connect(db, { useNewUrlParser: true });

  console.log(`MongoDB Connected to ${connection.host}`);
};
