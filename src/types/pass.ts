import { Document } from "mongoose";

export interface IPass extends Document {
  passLevel: number;
  levelDetails: string;
  created_at: Date;
  updated_at?: Date;
}
