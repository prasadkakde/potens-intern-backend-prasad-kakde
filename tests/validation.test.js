const request = require("supertest");
const app = require("../src/app");

describe("Validation", () => {
  test("should reject missing actor", async () => {
    const res = await request(app)
      .post("/api/log")
      .set("x-api-key", process.env.API_KEY)
      .send({
        action: "LOGIN",
        payload: {}
      });

    expect(res.statusCode).toBe(400);
  });
});