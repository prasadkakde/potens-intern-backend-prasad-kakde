const logger = require("../config/logger");

const errorMiddleware = (err, req, res, next) => {

    logger.error(err);

    if (err.name === "ZodError") {

        return res.status(400).json({
            success: false,
            message: "Validation Failed",
            errors: err.issues
        });

    }

    return res.status(err.status || 500).json({
        success: false,
        message: err.message || "Internal Server Error"
    });

};

module.exports = errorMiddleware;