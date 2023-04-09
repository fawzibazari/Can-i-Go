import mongoose, { Document } from "mongoose";

export interface IUser extends Document {
  firstname: string;
  lastname: string;
  age: number;
  phoneNumber: string;
  address: string;
  passId?: mongoose.Types.ObjectId;
}
