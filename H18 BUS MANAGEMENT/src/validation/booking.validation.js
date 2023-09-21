const Joi = require("joi");

const createBooking = {
    body: Joi.object().keys({
        Seat_number: Joi.string().required().trim(),
        Payment_details: Joi.string().required().trim()
    })
};

const listBooking = {
    query: Joi.object().keys({
        Seat_number: Joi.string().allow("").trim(),
        Payment_details: Joi.string().allow("").trim()
    })
}

module.exports = { createBooking, listBooking }