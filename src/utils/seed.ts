import UserModel from "../models/user";

const users = [
    {
        "_id": "6432df088765b79d2dca3497",
        "firstname": "test",
        "lastname": "test2",
        "age": 18,
        "phoneNumber": "0610565096",
        "address": "8 rue de la paix",
        "createdAt": "2023-04-09T15:51:36.141Z",
        "updatedAt": "2023-04-10T16:20:07.855Z",
        "__v": 0,
        "passId": "64343730f94829d1def60c4c"
    },
    {
        "_id": "6432df1f8765b79d2dca349a",
        "firstname": "test",
        "lastname": "test2",
        "age": 2,
        "phoneNumber": "0610565096",
        "address": "8 rue de la paix",
        "createdAt": "2023-04-09T15:51:59.094Z",
        "updatedAt": "2023-04-09T15:51:59.094Z",
        "__v": 0
    }
]

export async function seedData() {
    await UserModel.deleteMany({})
    await UserModel.insertMany(users)
}