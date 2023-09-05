const Joi = require("joi");

const createUserAdd = {
    body: Joi.object().keys({
        address: Joi.string().required().trim(),
        city: Joi.string().required().trim(),
        state: Joi.string().required().trim(),
        country: Joi.string().required().trim(),
        pincode: Joi.string().required().trim(),
        telephone: Joi.string().required().trim()
    })
};

const listUserAdd = {
    query: Joi.object().keys({
        address: Joi.string().allow("").trim(),
        city: Joi.string().allow("").trim(),
        state: Joi.string().allow("").trim(),
        country: Joi.string().allow("").trim(),
        pincode: Joi.string().allow("").trim(),
        telephone: Joi.string().allow("").trim()
    })
}

module.exports = { createUserAdd, listUserAdd }