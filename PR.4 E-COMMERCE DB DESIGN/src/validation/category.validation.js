const Joi = require("joi");

const createCategory = {
    body: Joi.object().keys({
        category_name: Joi.string().required().trim(),
        category_desc: Joi.string().required().trim()
    })
};

const listCategory = {
    query: Joi.object().keys({
        category_name: Joi.string().allow("").trim(),
        category_desc: Joi.string().allow("").trim()
    })
}

module.exports = { createCategory, listCategory }