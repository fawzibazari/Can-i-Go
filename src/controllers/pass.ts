import { Response, Request } from "express";
import Pass from "../models/pass";
import { IPass } from "../types/pass";

const getPasses = async (req: Request, res: Response): Promise<void> => {
  try {
    const passes: IPass[] = await Pass.find();
    res.status(200).json({ passes });
  } catch (error) {
    console.log(error);
  }
};

const retrievePass = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
    } = req;
    const pass_by_id: IPass | null = await Pass.findById({ _id: id });

    res.status(pass_by_id ? 200 : 404).json({ pass_by_id });
  } catch (error) {
    console.log(error);
  }
};

const addPass = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<
      IPass,
      "passLevel" | "levelDetails" | "created_at" | "updated_at"
    >;
    const pass = new Pass({
      passLevel: body.passLevel,
      levelDetails: body.levelDetails,
      created_at: Date.now(),
    });

    const newPass: IPass = await pass.save();
    res.status(201).json(newPass);
  } catch (error) {
    res.status(400).json("missing fields");
  }
};

const updatePass = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;

    const updatePass: IPass | null = await Pass.findByIdAndUpdate(
      { _id: id },
      {
        passLevel: body.passLevel,
        levelDetails: body.levelDetails,
        updated_at: Date.now(),
      },
      //for getting the new updated object
      { new: true }
    );

    res.status(updatePass ? 200 : 404).json({
      pass: updatePass,
    });
  } catch (error) {
    console.log(error);
  }
};

const deletePass = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedPass: IPass | null = await Pass.findByIdAndRemove(
      req.params.id
    );
    res.status(204).json({
      pass: deletedPass,
    });
  } catch (error) {
    console.log(error);
  }
};
export { getPasses, addPass, updatePass, deletePass, retrievePass };
