import { Router } from "express";
import { addPass, deletePass, getPasses, retrievePass, updatePass } from "../controllers/pass";


const passRoutes: Router = Router();

passRoutes.get("/pass", getPasses);
passRoutes.post("/pass", addPass);
passRoutes.put("/pass/:id", updatePass);
passRoutes.delete("/pass/:id", deletePass);
passRoutes.get("/pass/:id", retrievePass);

export default passRoutes;
