const Joi = require("joi");

// create user

const createStationery = {
  body: Joi.object().keys({
    stationery_name: Joi.string().trim().required(),
    books: Joi.string().trim().required(),
    calender: Joi.string().trim().required(),
    pens: Joi.string().trim().required(),
    HB_Pencils: Joi.string().trim().required(),
    stationery_desc: Joi.string().trim().required()
  }),
};
const getStationery = {
  query: Joi.object().keys({
    stationery_name: Joi.string().trim().allow(""),
    books: Joi.string().trim().allow(""),
    calender: Joi.string().trim().allow(""),
    pens: Joi.string().trim().allow(""),
    HB_Pencils: Joi.string().trim().allow(""),
    stationery_desc: Joi.string().trim().allow("")
  }),
};

module.exports = { createStationery, getStationery };