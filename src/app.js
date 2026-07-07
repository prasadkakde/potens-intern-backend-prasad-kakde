const express = require("express");

const routes = require("./routes/index.routes");

const apiKeyMiddleware = require("./middleware/apiKey.middleware");
const rateLimiter = require("./middleware/rateLimiter.middleware");
const errorMiddleware = require("./middleware/error.middleware");
const notFoundMiddleware = require("./middleware/notFound.middleware");

const app = express();

app.use(express.json());

app.use(rateLimiter);

// Protect all API routes
app.use("/api", apiKeyMiddleware, routes);

// 404 Middleware
app.use(notFoundMiddleware);

// Error Middleware
app.use(errorMiddleware);

module.exports = app;