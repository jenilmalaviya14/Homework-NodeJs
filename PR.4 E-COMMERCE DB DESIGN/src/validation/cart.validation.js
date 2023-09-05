const Joi = require("joi");

const createCart = {
    body: Joi.object().keys({
        quantity: Joi.string().required().trim(),
        SKU: Joi.string().required().trim(),
        password: Joi.string().required().trim(),
        returns: Joi.string().required().trim()
    })
};

const listCart = {
    query: Joi.object().keys({
        quantity: Joi.string().allow("").trim(),
        SKU: Joi.string().allow("").trim(),
        password: Joi.string().allow("").trim(),
        returns: Joi.string().allow("").trim()
    })
}

module.exports = { createCart, listCart }