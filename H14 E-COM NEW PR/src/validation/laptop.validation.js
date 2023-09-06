const Joi = require("joi");

const createLaptop = {
    body: Joi.object().keys({
        Company: Joi.string().required().trim(),
        type: Joi.string().required().trim(),
        touch_and_notouch: Joi.string().required().trim(),
        accessories: Joi.string().required().trim()
    })
};

const listLaptop = {
    query: Joi.object().keys({
        Company: Joi.string().allow("").trim(),
        type: Joi.string().allow("").trim(),
        touch_and_notouch: Joi.string().allow("").trim(),
        accessories: Joi.string().allow("").trim()
    })
}

module.exports = { createLaptop, listLaptop }