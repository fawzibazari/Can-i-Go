import { Response, Request } from "express";
import Places from "../models/place";
import { IPlace } from "../types/place";

const getPlaces = async (req: Request, res: Response): Promise<void> => {
  try {
    const places: IPlace[] = await Places.find();
    res.status(200).json({ places });
  } catch (error) {
    console.log(error);
  }
};

const retrievePlace = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
    } = req;
    const place_by_id: IPlace | null = await Places.findById({ _id: id });

    res.status(place_by_id ? 200 : 404).json({ place_by_id });
  } catch (error) {
    console.log(error);
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
      body.minimumPassLevel > 0 && body.minimumPassLevel < 4 
    ) {
      const place = new Places({
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

    const place_by_id: IPlace | null = await Places.findById({ _id: id });
    if (place_by_id?.ownerId == req.body.user._id) {
      const updatePlace: IPlace | null = await Places.findByIdAndUpdate(
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
    } else {
      res.send(403);
    }
  } catch (error) {
    console.log(error);

  }
};

const deletePlace = async (req: Request, res: Response): Promise<void> => {
  try {
    const place_by_id: IPlace | null = await Places.findById({
      _id: req.params.id,
    });

    if (place_by_id?.ownerId == req.body.user._id) {
      const deletedPlace: IPlace | null = await Places.findByIdAndRemove(
        req.params.id
      );
      res.status(204).json({
        place: deletedPlace,
      });
    } else {
      res.send(403);
    }
  } catch (error) {
    console.log(error);
  }
};
export { getPlaces, addPlace, updatePlace, deletePlace, retrievePlace };
