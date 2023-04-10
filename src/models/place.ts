import mongoose from "mongoose";

const PlaceSchema = new mongoose.Schema({
  address: { type: String, required: true, unique: false },
  phoneNumber: { type: String, required: true, unique: false },
  minimumPassLevel: { type: Number, required: true, unique: false },
  minimumAge: { type: Number, required: true, unique: false },
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
});

export default mongoose.model("Place", PlaceSchema);
