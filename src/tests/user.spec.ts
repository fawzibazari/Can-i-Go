import request from "supertest";
import app from "../app";
/* Testing the API endpoints. */
describe("GET /test/user", () => {
  it("should return all users", async () => {
    const res = await request(app).get("/test/user");
    expect(res.statusCode).toBe(200);
  });
});

describe("GET /test/user/:id", () => {
  it("should return a user", async () => {
    const res = await request(app).get("/test/user/6432df088765b79d2dca3497");
    expect(res.statusCode).toBe(200);
  });
});

describe("POST /test/user", () => {
  it("should create a user", async () => {
    const res = await request(app).post("/test/user").send({
      firstname: "test",
      lastname: "test2",
      age: 18,
      phoneNumber: "0610565096",
      address: "8 rue de la paix",
      passId: "64343730f94829d1def60c4c",
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.firstname).toBe("test");
  });
});

describe("PUT /test/user/:id", () => {
  it("should update a user", async () => {
    const res = await request(app)
      .put("/test/user/6435e16d5c5711030cb9d4f7")
      .send({
        firstname: "test",
        lastname: "test2",
        age: 18,
        phoneNumber: "0610565096",
        address: "8 rue de la paix",
        passId: "64343730f94829d1def60c4c",
      });
    expect(res.statusCode).toBe(200);
    expect(res.body.age).toBe(18);
  });
});

describe("DELETE /test/user/:id", () => {
  it("should delete a user", async () => {
    const res = await request(app).delete("/test/user/6435e16d5c5711030cb9d4f7");
    expect(res.statusCode).toBe(204);
  });
});
