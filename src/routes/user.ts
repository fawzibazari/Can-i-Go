import { Router } from "express";
import {
  addUser,
  deleteUser,
  getUsers,
  retrieveUser,
  updateUser,
  userByOneSpace,
  spacesByUser,
} from "../controllers/user";
import { authenticateToken } from "../utils/jwt";

const userRoutes: Router = Router();

userRoutes.get("/user", authenticateToken, getUsers);
userRoutes.post("/user", addUser);
userRoutes.put("/user/:id", authenticateToken, updateUser);
userRoutes.delete("/user/:id", authenticateToken, deleteUser);
userRoutes.get("/user/:id", authenticateToken, retrieveUser);
userRoutes.post("/user-by-place-id", authenticateToken, userByOneSpace);
userRoutes.post("/places-by-user-id", authenticateToken, spacesByUser);

export default userRoutes;
