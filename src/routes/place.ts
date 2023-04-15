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

placeRoutes.get("/places", authenticateToken, getPlaces);
placeRoutes.post("/places", authenticateToken, addPlace);
placeRoutes.put("/places/:id", authenticateToken, updatePlace);
placeRoutes.delete("/places/:id", authenticateToken, deletePlace);
placeRoutes.get("/places/:id", authenticateToken, retrievePlace);

export default placeRoutes;
