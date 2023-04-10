import { Response, Request } from "express";
import PlaceModel from "../models/place";
import { IPlace } from "../types/place";

const getPlaces = async (req: Request, res: Response): Promise<void> => {
  try {
    const places: IPlace[] = await PlaceModel.find();
    res.status(200).json({ places });
  } catch (error) {
    throw error;
  }
};

const retrievePlace = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
    } = req;
    const place_by_id: IPlace | null = await PlaceModel.findById({ _id: id });

    res.status(place_by_id ? 200 : 404).json({ place_by_id });
  } catch (error) {
    throw error;
  }
};

const addPlace = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<
      IPlace,
      "address" | "phoneNumber" | "minimumPassLevel" | "minimumAge" | "ownerId"
    >;
    body.minimumPassLevel;
    if (
      body.minimumPassLevel == 1 ||
      body.minimumPassLevel == 2 ||
      body.minimumPassLevel == 3
    ) {
      const place = new PlaceModel({
        address: body.address,
        phoneNumber: body.phoneNumber,
        minimumPassLevel: body.minimumPassLevel,
        minimumAge: body.minimumAge,
        ownerId: body.ownerId,
      });

      const newPlace: IPlace = await place.save();
      res.status(201).json(newPlace);
    } else {
      res.status(400).json("invalid PassLevel");
    }
  } catch (error) {
    res.status(400).json("missing fields");
  }
};

const updatePlace = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;

    const updatePlace: IPlace | null = await PlaceModel.findByIdAndUpdate(
      { _id: id },
      {
        address: body.address,
        phoneNumber: body.phoneNumber,
        minimumPassLevel: body.minimumPassLevel,
        minimumAge: body.minimumAge,
        ownerId: body.ownerId,
      },
      //for getting the new updated object
      { new: true }
    );

    res.status(updatePlace ? 200 : 404).json({
      place: updatePlace,
    });
  } catch (error) {}
};

const deletePlace = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedPlace: IPlace | null = await PlaceModel.findByIdAndRemove(
      req.params.id
    );
    res.status(204).json({
      place: deletedPlace,
    });
  } catch (error) {
    throw error;
  }
};
export { getPlaces, addPlace, updatePlace, deletePlace, retrievePlace };
