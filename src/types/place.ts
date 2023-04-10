import mongoose, { Document } from "mongoose";

export interface IPlace extends Document {
  address: string;
  phoneNumber: string;
  minimumPassLevel: number;
  minimumAge: number;
  ownerId: mongoose.Types.ObjectId;

}
