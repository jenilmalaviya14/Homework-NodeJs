const Joi = require("joi");

const createLegion = {
    body: Joi.object().keys({
        model: Joi.string().required(),
        price: Joi.string().required(),
        processor: Joi.string().required(),
        memory: Joi.string().required(),
        colour: Joi.string().required(),
        gaming: Joi.string().required(),
        storage: Joi.string().required(),
        description: Joi.string().required(),
        image: Joi.string().allow(""),
        laptop: Joi.string().allow(""),
    })
};

const listLegion = {
    query: Joi.object().keys({
        model: Joi.string().allow(""),
        price: Joi.string().allow(""),
        processor: Joi.string().allow(""),
        memory: Joi.string().allow(""),
        colour: Joi.string().allow(""),
        gaming: Joi.string().allow(""),
        storage: Joi.string().allow(""),
        description: Joi.string().allow(""),
        image: Joi.string().allow(""),
        laptop: Joi.string().allow(""),
    })
}

module.exports = { createLegion, listLegion }