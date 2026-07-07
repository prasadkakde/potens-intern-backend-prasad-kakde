const { z } = require("zod");

const logSchema = z.object({

    actor: z
        .string()
        .trim()
        .min(2)
        .max(100),

    action: z
        .string()
        .trim()
        .min(2)
        .max(100),

    payload: z.object({}).passthrough()

});

module.exports = logSchema;