const repository = require("../repositories/log.repository");

const exportLogs = async (query) => {

    const filters = {};

    if (query.actor) {
        filters.actor = query.actor;
    }

    if (query.startDate || query.endDate) {

        filters.createdAt = {};

        if (query.startDate) {
            filters.createdAt.gte = new Date(query.startDate);
        }

        if (query.endDate) {
            filters.createdAt.lte = new Date(query.endDate);
        }
    }

    return await repository.exportLogs(filters);

};

module.exports = {
    exportLogs
};