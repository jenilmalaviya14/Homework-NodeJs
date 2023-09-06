const Joi = require("joi");

const createOrder = {
    body: Joi.object().keys({
        total_order: Joi.string().required().trim(),
        order_quntity: Joi.string().required().trim(),
        order_location: Joi.string().required().trim(),
        courier: Joi.string().required().trim()
    })
};

const listOrder = {
    query: Joi.object().keys({
        total_order: Joi.string().allow("").trim(),
        order_quntity: Joi.string().allow("").trim(),
        order_location: Joi.string().allow("").trim(),
        courier: Joi.string().allow("").trim()
    })
}

module.exports = { createOrder, listOrder }