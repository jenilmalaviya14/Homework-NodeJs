const Joi = require("joi");

/** create user */
const createUser = {
  body: Joi.object().keys({
    first_name: Joi.string().required().trim(),
    last_name: Joi.string().required().trim(),
    email: Joi.string().required().trim(),
    password: Joi.string().required().trim(),
    address: Joi.string().required().trim()
  }),
};

const listUser = {
  query: Joi.object().keys({
    first_name:Joi.string().allow("").trim(),
    last_name:Joi.string().allow("").trim(),
    email:Joi.string().allow("").trim(),
    password:Joi.string().allow("").trim(),
    address:Joi.string().allow("").trim()
  })
};

module.exports = {
  createUser,
  listUser
};