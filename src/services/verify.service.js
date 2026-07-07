const repository = require("../repositories/log.repository");
const generateHash = require("../utils/hash");

const verifyChain = async () => {

    const logs = await repository.getAllLogs();

    for (let i = 0; i < logs.length; i++) {

        const log = logs[i];

        const expectedHash = generateHash(
            log.previousHash,
            log.actor,
            log.action,
            log.payload,
            log.createdAt
        );

        if (expectedHash !== log.currentHash) {

            return {
                status: "FAIL",
                brokenEntry: log.id
            };

        }

        if (i > 0) {

            if (logs[i - 1].currentHash !== log.previousHash) {

                return {
                    status: "FAIL",
                    brokenEntry: log.id
                };

            }

        }

    }

    return {
        status: "PASS"
    };

};

module.exports = {
    verifyChain
};