const Joi = require("joi");

const createBus = {
    body: Joi.object().keys({
        Bus_number: Joi.string().required().trim(),
        Capacity: Joi.string().required().trim(),
        Type: Joi.string().required().trim(),
        Layout: Joi.string().required().trim(),
        amenities : Joi.string().required().trim(),
    })
};

const listBus = {
    query: Joi.object().keys({
        Bus_number: Joi.string().allow("").trim(),
        Capacity: Joi.string().allow("").trim(),
        Type: Joi.string().allow("").trim(),
        Layout: Joi.string().allow("").trim(),
        amenities : Joi.string().allow("").trim(),
    })
}

module.exports = { createBus, listBus }