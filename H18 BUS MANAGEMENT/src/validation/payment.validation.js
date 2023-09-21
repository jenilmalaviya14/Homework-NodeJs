const Joi = require("joi");

const createPayment = {
    body: Joi.object().keys({
        amount: Joi.string().required().trim(),
        payment_type: Joi.string().required().trim(),
        provider: Joi.string().required().trim(),
        account_number: Joi.string().required().trim(),
        status: Joi.string().required().trim()
    })
};

const listPayment = {
    query: Joi.object().keys({
        amount: Joi.string().allow("").trim(),
        payment_type: Joi.string().allow("").trim(),
        provider: Joi.string().allow("").trim(),
        account_number: Joi.string().allow("").trim(),
        status: Joi.string().allow("").trim()
    })
}

module.exports = { createPayment, listPayment }