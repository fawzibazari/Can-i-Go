import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true, unique: false },
    lastname: { type: String, required: true, unique: false },
    age: { type: Number, required: true, unique: false },
    phoneNumber: { type: String, required: true, unique: false },
    Address: { type: String, required: true, unique: false },
    passId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
