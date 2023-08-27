const Joi = require("joi");


const createbus =  {
  body: Joi.object().keys({
    bus_name: Joi.string().trim().required(),
    bus_number: Joi.string().trim().required(),
    bus_company: Joi.string().trim().required(),
    bus_year: Joi.string().trim().required(),
    bus_capacity: Joi.string().trim().required()
  }),
};
const getbus =  {
  query: Joi.object().keys({
    bus_name: Joi.string().trim().allow(""),
    bus_number: Joi.string().trim().allow(""),
    bus_company: Joi.string().trim().allow(""),
    bus_year: Joi.string().trim().allow(""),
    bus_capacity: Joi.string().trim().allow("")
  }),
};

module.exports = {createbus,getbus};