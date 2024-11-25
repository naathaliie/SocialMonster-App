import mongoose from "mongoose";

export async function connectToDB() {
  mongoose
    .connect("mongodb://localhost:27017/")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Failed to connect to MongoDB", err));
}
