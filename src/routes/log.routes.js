const express = require("express");

const router = express.Router();

const controller = require("../controllers/log.controller");

router.get("/export", controller.exportLogs);

router.get("/verify", controller.verifyLogs);

router.get("/:id", controller.getLogById);

router.post("/", controller.createLog);

module.exports = router;