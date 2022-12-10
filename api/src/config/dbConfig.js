import mongoose from "mongoose";

export const connectDB = () => {
  try {
    const mongoUrl = "mongodb://localhost:27017/user_crud";
    const conn = mongoose.connect(mongoUrl);

    conn
      ? console.log("Mongo connected!")
      : console.error("Unable to connect mogo");
  } catch (error) {
    console.error(error);
  }
};
