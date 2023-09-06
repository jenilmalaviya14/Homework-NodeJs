const Joi = require("joi");

const createLegino = {
    body: Joi.object().keys({
        model: Joi.string().required().trim(),
        price: Joi.string().required().trim(),
        processor: Joi.string().required().trim(),
        memory: Joi.string().required().trim(),
        colour: Joi.string().required().trim(),
        gaming: Joi.string().required().trim(),
        storage: Joi.string().required().trim(),
        description: Joi.string().required().trim()
    })
};

const listLegino = {
    query: Joi.object().keys({
        model: Joi.string().allow("").trim(),
        price: Joi.string().allow("").trim(),
        processor: Joi.string().allow("").trim(),
        memory: Joi.string().allow("").trim(),
        colour: Joi.string().allow("").trim(),
        gaming: Joi.string().allow("").trim(),
        storage: Joi.string().allow("").trim(),
        description: Joi.string().allow("").trim()
    })
}

module.exports = { createLegino, listLegino }