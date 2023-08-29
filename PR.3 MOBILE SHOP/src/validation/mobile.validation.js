const Joi = require("joi");

// create user

const createMobile = {
  body: Joi.object().keys({
    mobile_company: Joi.string().trim().required(),
    mobile_model: Joi.string().trim().required(),
    mobile_colour: Joi.string().trim().required(),
    Ram: Joi.string().trim().required(),
    Rom: Joi.string().trim().required(),
    product_Price: Joi.string().trim().required(),
    product_Qty: Joi.string().trim().required(),
    product_desc: Joi.string().trim().required()
  }),
};

const getMobile = {
  query: Joi.object().keys({
    mobile_company: Joi.string().trim().allow(""),
    mobile_model: Joi.string().trim().allow(""),
    mobile_colour: Joi.string().trim().allow(""),
    Ram: Joi.string().trim().allow(""),
    Rom: Joi.string().trim().allow(""),
    product_Price: Joi.string().trim().allow(""),
    product_Qty: Joi.string().trim().allow(""),
    product_desc: Joi.string().trim().allow("")
  }),
};

module.exports = { createMobile, getMobile };