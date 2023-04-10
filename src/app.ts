import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/user";
import passRoutes from "./routes/pass";
import placeRoutes from "./routes/place";
import authRoutes from "./routes/auth";
import { seedData } from "./utils/seed";

const app = express();

const PORT: string | number = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(userRoutes);
app.use(passRoutes);
app.use(placeRoutes);
app.use(authRoutes);

// Connect to MongoDB
mongoose
  .connect("mongodb://mongo:27017/docker-node-mongo")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", async function name(req: Request, res: Response) {
  res.send("hello friend ✌️");
});

// started the server
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

seedData()