const apiKeyMiddleware = (req, res, next) => {
    const apiKey = req.header("x-api-key");

    if (!apiKey) {
        return res.status(401).json({
            success: false,
            message: "API Key is missing"
        });
    }

    if (apiKey !== process.env.API_KEY) {
        return res.status(401).json({
            success: false,
            message: "Invalid API Key"
        });
    }

    next();
};

module.exports = apiKeyMiddleware;