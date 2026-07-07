const express = require("express");

const app = express();

// Middleware
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
    res.json({
        message: "Tamper Log Service API is Running 🚀"
    });
});

module.exports = app;