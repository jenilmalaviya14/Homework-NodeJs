const Joi = require("joi");

const createBusoperator = {
    body: Joi.object().keys({
        bus_operator: Joi.string().required().trim(),
        contact_details: Joi.string().required().trim(),
        associated: Joi.string().required().trim(),
    })
};

const listBusoperator = {
    query: Joi.object().keys({
        bus_operator: Joi.string().allow("").trim(),
        contact_details: Joi.string().allow("").trim(),
        associated: Joi.string().allow("").trim(),
    })
}

module.exports = { createBusoperator, listBusoperator }