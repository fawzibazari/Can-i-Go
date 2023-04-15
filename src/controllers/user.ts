import { Response, Request } from "express";
import Users from "../models/user";
import Pass from "../models/pass";
import Places from "../models/place";
import { IUser } from "../types/user";
import { IPlace } from "../types/place";
import { IPass } from "../types/pass";

const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users: IUser[] = await Users.find();
    res.status(200).json({ users });
  } catch (error) {
    console.log(error);
  }
};

const retrieveUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
    } = req;
    const user_by_id: IUser | null = await Users.findById({ _id: id });

    res.status(user_by_id ? 200 : 404).json({ user_by_id });
  } catch (error) {
    console.log(error);
  }
};

const addUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<
      IUser,
      "firstname" | "lastname" | "age" | "phoneNumber" | "address" | "passId"
    >;
    const user = new Users({
      firstname: body.firstname,
      lastname: body.lastname,
      age: body.age,
      phoneNumber: body.phoneNumber,
      address: body.address,
      passId: body.passId,
    });

    const newUser: IUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json("missing fields or pass ID does not exists");
  }
};

const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;
    // if (id == req.body.user._id) {
    const updateUser: IUser | null = await Users.findByIdAndUpdate(
      { _id: id },
      body,
      { new: true }
    );

    res.status(updateUser ? 200 : 404).json({
      user: updateUser,
    });
    // } else {
    // }
  } catch (error) {
    console.log(error);
    res.send(403);
  }
};

const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedUser: IUser | null = await Users.findByIdAndRemove(
      req.params.id
    );
    res.status(204).json({
      user: deletedUser,
    });
  } catch (error) {
    console.log(error);
    res.send(403);
  }
};

const userByOneSpace = async (req: Request, res: Response): Promise<void> => {
  try {
    const user_id = req.body.user_id;
    const place_id = req.body.place_id;
    const user_by_id: IUser | null = await Users.findById({ _id: user_id });
    const pass_by_id: IPass | null = await Pass.findById({
      _id: user_by_id?.passId,
    });
    const place_by_id: IPlace | null = await Places.findById({
      _id: place_id,
    })
      .where("minimumAge")
      .lte(user_by_id?.age as number)
      .where("minimumPassLevel")
      .gte(pass_by_id?.passLevel as number)
      .exec();
    place_by_id
      ? res.status(200).json({
          place_by_id,
          success: true,
          message: "yess you can access this space",
        })
      : res.status(404).json({
          place_by_id,
          success: false,
          message: "this place is not accessible for this user",
        });
  } catch (error) {
    res.status(400).json("missing fields");

    console.log(error);
  }
};

const spacesByUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user_id = req.body.user_id;
    const user_by_id: IUser | null = await Users.findById({ _id: user_id });
    const pass_by_id: IPass | null = await Pass.findById({
      _id: user_by_id?.passId,
    });
    const place_by_id: IPlace[] = await Places.find()
      .where("minimumAge")
      .lte(user_by_id?.age as number)
      .where("minimumPassLevel")
      .gte(pass_by_id?.passLevel as number)
      .exec();
    place_by_id.length > 0
      ? res.status(200).json({
          place_by_id,
          success: true,
          message: "all spaces that the user can access",
        })
      : res.status(404).json({
          place_by_id,
          success: false,
          message: "no spaces available for this user",
        });
  } catch (error) {
    res.status(400).json("missing fields");

    console.log(error);
  }
};
export {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
  retrieveUser,
  userByOneSpace,
  spacesByUser,
};
