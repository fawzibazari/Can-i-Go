import { Router } from "express";
import { addUser, deleteUser, getUsers, retrieveUser, updateUser , userByOneSpace, spacesByUser} from "../controllers/user";


const userRoutes: Router = Router();

userRoutes.get("/user", getUsers);
userRoutes.post("/user", addUser);
userRoutes.put("/user/:id", updateUser);
userRoutes.delete("/user/:id", deleteUser);
userRoutes.get("/user/:id", retrieveUser);
userRoutes.post("/user-by-place-id", userByOneSpace);
userRoutes.post("/places-by-user-id", spacesByUser);

export default userRoutes;
