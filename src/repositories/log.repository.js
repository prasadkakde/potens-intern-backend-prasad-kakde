const prisma = require("../config/prisma");

const createLog = async (data) => {
    return prisma.log.create({ data });
};

const getLastLog = async () => {
    return prisma.log.findFirst({
        orderBy: { id: "desc" }
    });
};

const getLogById = async (id) => {
    return prisma.log.findUnique({
        where: { id }
    });
};

const getAllLogs = async () => {
    return prisma.log.findMany({
        orderBy: { id: "asc" }
    });
};

module.exports = {
    createLog,
    getLastLog,
    getLogById,
    getAllLogs
};