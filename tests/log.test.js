const request = require("supertest");
const app = require("../src/app");

describe("POST /api/log", () => {
  test("should create a log", async () => {
    const res = await request(app)
      .post("/api/log")
      .set("x-api-key", process.env.API_KEY)
      .send({
        actor: "Prasad",
        action: "LOGIN",
        payload: { ip: "127.0.0.1" }
      });

    expect([200, 201]).toContain(res.statusCode);
  });
});