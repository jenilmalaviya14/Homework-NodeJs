const Joi = require("joi");

const createCar = {
    body: Joi.object().keys({
        car_model: Joi.string().required(),
        price: Joi.string().required(),
        Year: Joi.string().required(),
        colour: Joi.string().required(),
        description: Joi.string().required(),
        image: Joi.string(),
    })
};

const listCar = {
    query: Joi.object().keys({
        car_model: Joi.string().allow(""),
        price: Joi.string().allow(""),
        Year: Joi.string().allow(""),
        colour: Joi.string().allow(""),
        description: Joi.string().allow(""),
        image: Joi.string().allow(""),
    })
}

module.exports = { createCar, listCar }