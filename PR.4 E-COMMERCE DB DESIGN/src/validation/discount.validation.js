const Joi = require("joi");

const createDiscount = {
    body: Joi.object().keys({
        product_name: Joi.string().required().trim(),
        description: Joi.string().required().trim(),
        discount_percentage: Joi.string().required().trim(),
    })
};

const listDiscount = {
    query: Joi.object().keys({
        product_name: Joi.string().allow("").trim(),
        description: Joi.string().allow("").trim(),
        discount_percentage: Joi.string().allow("").trim()
    })
}

module.exports = { createDiscount, listDiscount }