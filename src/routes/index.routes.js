const express = require("express");
const router = express.Router();

const logRoutes = require("./log.routes");

router.use("/log", logRoutes);

module.exports = router;