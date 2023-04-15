import request from "supertest";
import app from "../app";
/* Testing the API endpoints. */
const requests = request("http://localhost:4000");

describe("GET /test/user", () => {
  it("should return all users", async () => {
    const res = await requests.get("/test/user");
    expect(res.statusCode).toBe(200);
    // Check type and length
    expect(Array.isArray(res.body.users)).toBeTruthy();
  });
});

describe("GET /test/user/:id", () => {
  const user = {
    _id: "6432df088765b79d2dca3497",
    firstname: "test",
    lastname: "test2",
    age: 18,
    phoneNumber: "0610565096",
    address: "8 rue de la paix",
    passId: "64343730f94829d1def60c4c",
    createdAt: "2023-04-09T15:51:36.141Z",
    updatedAt: "2023-04-10T16:20:07.855Z",
    __v: 0,
  };
  it("should return a user", async () => {
    const res = await requests.get("/test/user/6432df088765b79d2dca3497");
    expect(res.statusCode).toBe(200);
    expect(res.body.user_by_id._id).toBe(user._id);
    expect(res.body.user_by_id.firstname).toBe(user.firstname);
    expect(res.body.user_by_id.lastname).toBe(user.lastname);
  });
});

describe("POST /test/user", () => {
  it("should create a user", async () => {
    const res = await requests.post("/test/user").send({
      firstname: "test",
      lastname: "test2",
      age: 18,
      phoneNumber: "0610565096",
      address: "8 rue de la paix",
      passId: "64343730f94829d1def60c4c",
    });
    expect(res.statusCode).toBe(201);
  });
});

describe("PUT /test/user/:id", () => {
  it("should update a user", async () => {
    const res = await requests.put("/test/user/6432df088765b79d2dca3497").send({
      firstname: "test",
      lastname: "test2",
      age: 18,
      phoneNumber: "0610565096",
      address: "8 rue de la paix",
      passId: "64343730f94829d1def60c4c",
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.user.age).toBe(18);
  });
});

describe("DELETE /test/user/:id", () => {
  it("should delete a user", async () => {
    const res = await requests.delete("/test/user/6435e16d5c5711030cb9d4f7");
    expect(res.statusCode).toBe(204);
  });
});
