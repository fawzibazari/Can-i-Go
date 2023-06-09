import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true, unique: false },
    lastname: { type: String, required: true, unique: false },
    age: { type: Number, required: true, unique: false },
    phoneNumber: { type: String, required: true, unique: false },
    address: { type: String, required: true, unique: false },
    passId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pass",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Users", UserSchema);
