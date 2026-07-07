const crypto = require("crypto");

const generateHash = (
    previousHash,
    actor,
    action,
    payload,
    createdAt
) => {

    const data = JSON.stringify({
        previousHash,
        actor,
        action,
        payload,
        createdAt
    });

    return crypto
        .createHash("sha256")
        .update(data)
        .digest("hex");
};

module.exports = generateHash;