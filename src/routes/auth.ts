import { Router } from "express";
import { authenticateUser } from "../controllers/auth";


const authRoutes: Router = Router();

authRoutes.post("/auth", authenticateUser);


export default authRoutes;
