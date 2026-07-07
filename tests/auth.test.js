const request = require("supertest");
const app = require("../src/app");

describe("API Key Authentication", () => {
  test("should return 401 if API key is missing", async () => {
    const res = await request(app).get("/api/log/verify");
    expect(res.statusCode).toBe(401);
  });
});