const request = require("supertest");
const app = require("../src/app");

describe("Export Logs", () => {
  test("should export logs", async () => {
    const res = await request(app)
      .get("/api/log/export")
      .set("x-api-key", process.env.API_KEY);

    expect(res.statusCode).toBe(200);
  });
});