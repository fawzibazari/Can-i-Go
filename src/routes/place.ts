import { Router } from "express";
import { addPlace, deletePlace, getPlaces, retrievePlace, updatePlace } from "../controllers/place";


const placeRoutes: Router = Router();

placeRoutes.get("/place", getPlaces);
placeRoutes.post("/place", addPlace);
placeRoutes.put("/place/:id", updatePlace);
placeRoutes.delete("/place/:id", deletePlace);
placeRoutes.get("/place/:id", retrievePlace);

export default placeRoutes;
