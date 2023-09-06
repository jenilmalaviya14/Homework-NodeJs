const Joi = require("joi");

const createUser = {
    body: Joi.object().keys({
        username: Joi.string().required().trim(),
        first_name: Joi.string().required().trim(),
        last_name: Joi.string().required(),
        telephone: Joi.string().required().trim(),
        email: Joi.string().required().trim()
    })
};

const listUser = {
    query: Joi.object().keys({
        username: Joi.string().allow("").trim(),
        first_name: Joi.string().allow("").trim(),
        last_name: Joi.string().allow(""),
        telephone: Joi.string().allow("").trim(),
        email: Joi.string().allow("").trim(),
    })
}

module.exports = { createUser, listUser }