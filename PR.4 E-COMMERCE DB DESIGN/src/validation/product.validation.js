const Joi = require("joi");

const createProduct = {
    body: Joi.object().keys({
        product_name: Joi.string().required().trim(),
        product_price: Joi.string().required().trim(),
        product_desc: Joi.string().required().trim(),
        prosuct_SKU: Joi.string().required().trim()
    })
};

const listProduct = {
    query: Joi.object().keys({
        product_name: Joi.string().allow("").trim(),
        product_price: Joi.string().allow("").trim(),
        product_desc: Joi.string().allow("").trim(),
        prosuct_SKU: Joi.string().allow("").trim()
    })
}

module.exports = { createProduct, listProduct }