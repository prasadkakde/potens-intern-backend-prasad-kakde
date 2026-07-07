const logRepository = require("../repositories/log.repository");
const generateHash = require("../utils/hash");

const createLog = async ({ actor, action, payload }) => {

    const lastLog = await logRepository.getLastLog();

    const previousHash = lastLog
        ? lastLog.currentHash
        : "GENESIS";

    const createdAt = new Date();

    const currentHash = generateHash(
        previousHash,
        actor,
        action,
        payload,
        createdAt
    );

    return await logRepository.createLog({
        actor,
        action,
        payload,
        previousHash,
        currentHash,
        createdAt
    });
};

const getLogById = async (id) => {
    return await logRepository.getLogById(Number(id));
};

module.exports = {
    createLog,
    getLogById
};