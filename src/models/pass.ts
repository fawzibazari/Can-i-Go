import mongoose from "mongoose";

const PassSchema = new mongoose.Schema({
  passLevel: { type: Number, required: true, unique: false },
  levelDetails: { type: String, required: true, unique: false },
  created_at: { type: Date,required: true },
  updated_at: { type: Date, required: false },
});

export default mongoose.model("Pass", PassSchema);
