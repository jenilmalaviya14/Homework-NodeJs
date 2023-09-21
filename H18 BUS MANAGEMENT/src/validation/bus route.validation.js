const Joi = require("joi");

const createBusroute = {
    body: Joi.object().keys({
        Bus_route: Joi.string().required().trim(),
        From: Joi.string().required().trim(),
        To: Joi.string().required().trim(),
        Intermediate: Joi.string().required().trim(),
        Distance: Joi.string().required().trim(),
    })
};

const listBusroute = {
    query: Joi.object().keys({
        Bus_route: Joi.string().allow("").trim(),
        From: Joi.string().allow("").trim(),
        To: Joi.string().allow("").trim(),
        Intermediate: Joi.string().allow("").trim(),
        Distance: Joi.string().allow("").trim()
    })
}

module.exports = { createBusroute, listBusroute }