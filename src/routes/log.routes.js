const express = require("express");

const router = express.Router();

const controller = require("../controllers/log.controller");

router.post("/", controller.createLog);

router.get("/verify", controller.verifyLogs);

router.get("/:id", controller.getLogById);

module.exports = router;