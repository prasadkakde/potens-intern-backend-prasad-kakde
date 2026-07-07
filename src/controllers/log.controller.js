const logService = require("../services/log.service");
const verifyService = require("../services/verify.service");
const logSchema = require("../validations/log.validation");
const exportService = require("../services/export.service");
// POST /api/log
const createLog = async (req, res, next) => {
    try {

        const validatedData = logSchema.parse(req.body);

        const log = await logService.createLog(validatedData);

        return res.status(201).json({
            success: true,
            message: "Log created successfully",
            data: log
        });

    } catch (error) {
        next(error);
    }
};

// GET /api/log/:id
const getLogById = async (req, res, next) => {
    try {

        const log = await logService.getLogById(req.params.id);

        if (!log) {
            return res.status(404).json({
                success: false,
                message: "Log not found"
            });
        }

        const result = await verifyService.verifyChain();

        return res.status(200).json({
            success: true,
            data: {
                log,
                verification: result.status
            }
        });

    } catch (error) {
        next(error);
    }
};

// GET /api/log/verify
const verifyLogs = async (req, res, next) => {
    try {

        const result = await verifyService.verifyChain();

        return res.status(200).json(result);

    } catch (error) {
        next(error);
    }
};

const exportLogs = async (req, res, next) => {

    try {

        const logs = await exportService.exportLogs(req.query);

        return res.status(200).json({
            success: true,
            count: logs.length,
            data: logs
        });

    } catch (error) {

        next(error);

    }

};

module.exports = {
    createLog,
    getLogById,
    verifyLogs,
    exportLogs
};