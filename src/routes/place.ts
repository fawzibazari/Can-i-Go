import { Router } from "express";
import {
  addPlace,
  deletePlace,
  getPlaces,
  retrievePlace,
  updatePlace,
} from "../controllers/place";
import { authenticateToken } from "../utils/jwt";

const placeRoutes: Router = Router();

placeRoutes.get("/place", authenticateToken, getPlaces);
placeRoutes.post("/place", authenticateToken, addPlace);
placeRoutes.put("/place/:id", authenticateToken, updatePlace);
placeRoutes.delete("/place/:id", authenticateToken, deletePlace);
placeRoutes.get("/place/:id", authenticateToken, retrievePlace);

export default placeRoutes;
