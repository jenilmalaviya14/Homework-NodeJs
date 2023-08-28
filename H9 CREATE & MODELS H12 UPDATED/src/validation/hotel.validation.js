const Joi = require("joi");

// create user

const createhotel =  {
  body: Joi.object().keys({
    hotel_name: Joi.string().trim().required(),
    hotel_email: Joi.string().trim().required(),
    hotel_address: Joi.string().trim().required(),
    hotel_phone: Joi.string().trim().required(),
    room_Price: Joi.string().trim().required(),
    hotel_desc: Joi.string().trim().required()
  }),
};
const gethotel =  {
  query: Joi.object().keys({
    hotel_name: Joi.string().trim().allow(""),
    hotel_email: Joi.string().trim().allow(""),
    hotel_address: Joi.string().trim().allow(""),
    hotel_phone: Joi.string().trim().allow(""),
    room_Price: Joi.string().trim().allow(""),
    hotel_desc: Joi.string().trim().allow("")
  }),
};

module.exports = {createhotel,gethotel};