import mongoose from "mongoose";

// Skapa ett Mongoose-schema för monster
const monsterModelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  description: { type: String, required: true },
  horns: { type: Number, required: true },
  legs: { type: Number, required: true },
  color: { type: String, required: true },
  likes: { type: [String], required: true },  // Array av strängar
  dislikes: { type: [String], required: true }, // Array av strängar
});

// Skapa och exportera modellen för monster
export const Monster = mongoose.model("Monster", monsterModelSchema);