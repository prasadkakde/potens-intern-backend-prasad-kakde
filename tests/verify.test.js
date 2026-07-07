const request = require("supertest");
const app = require("../src/app");

describe("Verify Chain", () => {
  test("should verify chain", async () => {
    const res = await request(app)
      .get("/api/log/verify")
      .set("x-api-key", process.env.API_KEY);

    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBeDefined();
  });
});