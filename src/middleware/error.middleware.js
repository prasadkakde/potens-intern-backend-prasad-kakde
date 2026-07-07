const logger = require("../config/logger");

const errorMiddleware = (err, req, res, next) => {

    logger.error(err);

    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Internal Server Error"
    });

};

module.exports = errorMiddleware;