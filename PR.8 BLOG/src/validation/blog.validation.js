const Joi = require("joi");

/** create user */
const createBlog = {
  body: Joi.object().keys({
    Image: Joi.string().allow(""),
    Date: Joi.string().required().trim(),
    Tag: Joi.string().required().trim(),
    Title: Joi.string().required().trim(),
    Desc: Joi.string().required().trim(),
    Founder_Name: Joi.string().required().trim(),
    Position: Joi.string().required().trim()
  }),
};
const listBlog = {
  query: Joi.object().keys({
    Image: Joi.string().allow(""),
    Date: Joi.string().allow("").trim(),
    Tag: Joi.string().allow("").trim(),
    Title: Joi.string().allow("").trim(),
    Desc: Joi.string().allow("").trim(),
    Founder_Name: Joi.string().allow("").trim(),
    Position: Joi.string().allow("").trim()
  }),
};

module.exports = {
    createBlog,
    listBlog
};