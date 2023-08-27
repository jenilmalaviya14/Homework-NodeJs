const Category = require("../models/category");

/**
 * Create category
 * @param {object} reqBody
 * @returns {Promise<Category>}
 */
const createCategory = async (reqBody) => {
  return Category.create(reqBody);
};

module.exports = {createCategory}
