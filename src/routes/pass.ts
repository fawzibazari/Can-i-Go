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

passRoutes.get("/pass", authenticateToken, getPasses);
passRoutes.post("/pass", authenticateToken, addPass);
passRoutes.put("/pass/:id", authenticateToken, updatePass);
passRoutes.delete("/pass/:id", authenticateToken, deletePass);
passRoutes.get("/pass/:id", authenticateToken, retrievePass);

export default passRoutes;
