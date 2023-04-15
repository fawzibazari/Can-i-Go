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

userRoutes.get("/users", authenticateToken, getUsers);
userRoutes.post("/users", addUser);
userRoutes.put("/users/:id", authenticateToken, updateUser);
userRoutes.delete("/users/:id", authenticateToken, deleteUser);
userRoutes.get("/users/:id", authenticateToken, retrieveUser);

//for unit test
// i created this routes for testing without a JWT
userRoutes.get("/test/user", getUsers);
userRoutes.post("/test/user", addUser);
userRoutes.put("/test/user/:id", updateUser);
userRoutes.delete("/test/user/:id", deleteUser);
userRoutes.get("/test/user/:id", retrieveUser);

userRoutes.post("/user-by-place-id", authenticateToken, userByOneSpace);
userRoutes.post("/places-by-user-id", authenticateToken, spacesByUser);

export default userRoutes;
