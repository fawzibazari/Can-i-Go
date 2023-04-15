import { Response, Request } from "express";
import { generateAccessToken } from "../utils/jwt";
import Users from "../models/user";
import { IUser } from "../types/user";

const authenticateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user_id = req.body.user_id;
    const user_by_id: IUser | null = await Users.findById({ _id: user_id });
    if (user_by_id == null) {
      res.status(404).send("User does not exist please try with another id");
    } else {
      const accessToken = generateAccessToken(user_by_id);
      res.send({
        accessToken,
      });
    }
  } catch (error) {
    console.log(error);

    res.status(401).send("invalid credentials");
  }
};

export { authenticateUser };
