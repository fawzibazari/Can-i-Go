import UserModel from "../models/user";
import PassModel from "../models/pass";
import PlaceModel from "../models/place";

const users = [
  {
    _id: "6432df088765b79d2dca3497",
    firstname: "test",
    lastname: "test2",
    age: 18,
    phoneNumber: "0610565096",
    address: "8 rue de la paix",
    createdAt: "2023-04-09T15:51:36.141Z",
    updatedAt: "2023-04-10T16:20:07.855Z",
    __v: 0,
    passId: "64343730f94829d1def60c4c",
  },
  {
    _id: "6432df1f8765b79d2dca349a",
    firstname: "test",
    lastname: "test2",
    age: 2,
    phoneNumber: "0610565096",
    address: "8 rue de la paix",
    createdAt: "2023-04-09T15:51:59.094Z",
    updatedAt: "2023-04-10T16:56:34.029Z",
    __v: 0,
    passId: "6433e00801bc19752389cf65",
  },
  {
    _id: "6435e16d5c5711030cb9d4f7",
    firstname: "test",
    lastname: "test2",
    age: 18,
    phoneNumber: "0610565096",
    address: "8 rue de la paix",
    passId: "64343730f94829d1def60c4c",
    createdAt: "2023-04-11T22:38:37.127Z",
    updatedAt: "2023-04-11T22:38:37.127Z",
    __v: 0,
  },
];

const passes = [
  {
    _id: "6433e00801bc19752389cf65",
    passLevel: 3,
    levelDetails: "not vaccinated",
    created_at: "2023-04-10T10:08:08.074Z",
    __v: 0,
    updated_at: "2023-04-10T16:12:01.044Z",
  },
  {
    _id: "6433e5cf94d295f4bf60d2cf",
    passLevel: 2,
    levelDetails: "recent case of covid",
    created_at: "2023-04-10T10:32:47.708Z",
    __v: 0,
  },
  {
    _id: "64343730f94829d1def60c4c",
    passLevel: 1,
    levelDetails: "vaccinated",
    created_at: "2023-04-10T16:20:00.006Z",
    __v: 0,
  },
];

const places = [
  {
    _id: "6433ecb43b9a6a5d013703b8",
    address: "rue de la victoire",
    phoneNumber: "0610565096",
    minimumPassLevel: 2,
    minimumAge: 18,
    ownerId: "6432df088765b79d2dca3497",
    __v: 0,
  },
  {
    _id: "6433ecc43b9a6a5d013703ba",
    address: "rue de la victoire",
    phoneNumber: "0610565096",
    minimumPassLevel: 2,
    minimumAge: 18,
    ownerId: "6432df088765b79d2dca3497",
    __v: 0,
  },
  {
    _id: "6433ed10d902627c76a30ea0",
    address: "rue de la victoire",
    phoneNumber: "0610565096",
    minimumPassLevel: 3,
    minimumAge: 18,
    ownerId: "6432df088765b79d2dca3497",
    __v: 0,
  },
];

export async function seedData() {
  await UserModel.deleteMany({});
  await PlaceModel.deleteMany({});
  await PassModel.deleteMany({});
  await UserModel.insertMany(users);
  await PassModel.insertMany(passes);
  await PlaceModel.insertMany(places);
}
