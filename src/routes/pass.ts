import { Router } from "express";
import {
  addPass,
  deletePass,
  getPasses,
  retrievePass,
  updatePass,
} from "../controllers/pass";
import { authenticateToken } from "../utils/jwt";

const passRoutes: Router = Router();

passRoutes.get("/passes", authenticateToken, getPasses);
passRoutes.post("/passes", authenticateToken, addPass);
passRoutes.put("/passes/:id", authenticateToken, updatePass);
passRoutes.delete("/passes/:id", authenticateToken, deletePass);
passRoutes.get("/passes/:id", authenticateToken, retrievePass);

export default passRoutes;
