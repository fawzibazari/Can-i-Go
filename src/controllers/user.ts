import { Response, Request } from "express";
import UserModel from "../models/user";
import { IUser } from "../types/user";

const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users: IUser[] = await UserModel.find();
    res.status(200).json({ users });
  } catch (error) {
    throw error;
  }
};

const retrieveUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
    } = req;
    const user_by_id: IUser | null = await UserModel.findById({ _id: id });

    res.status(user_by_id ? 200 : 404).json({ user_by_id });
  } catch (error) {
    throw error;
  }
};

const addUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<
      IUser,
      "firstname" | "lastname" | "age" | "phoneNumber" | "address" | "passId"
    >;
    const user = new UserModel({
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
    res.status(400).json("missing fields");
  }
};

const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;

    const updateUser: IUser | null = await UserModel.findByIdAndUpdate(
      { _id: id },
      body,
      { new: true }
    );

    res.status(updateUser ? 200 : 404).json({
      user: updateUser,
    });
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedUser: IUser | null = await UserModel.findByIdAndRemove(
      req.params.id
    );
    res.status(204).json({
      user: deletedUser,
    });
  } catch (error) {
    throw error;
  }
};
export { getUsers, addUser, updateUser, deleteUser, retrieveUser };
