const Joi = require("joi");

/** create user */
const createBook = {
  body: Joi.object().keys({
    book_name: Joi.string().required().trim(),
    book_desc: Joi.string().required().trim(),
    book_author: Joi.string().required().trim(),
    book_condtion: Joi.string().required().trim(),
    book_pages: Joi.string().required().trim(),
    book_price: Joi.string().required().trim()
  }),
};
const listBook = {
  query: Joi.object().keys({
    book_name: Joi.string().allow("").trim(),
    book_desc: Joi.string().allow("").trim(),
    book_author: Joi.string().allow("").trim(),
    book_condtion: Joi.string().allow("").trim(),
    book_pages: Joi.string().allow("").trim(),
    book_price: Joi.string().allow("").trim()
  }),
};

module.exports = {
    createBook,
    listBook
};