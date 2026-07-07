const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        message: "Log Routes Working"
    });
});

module.exports = router;