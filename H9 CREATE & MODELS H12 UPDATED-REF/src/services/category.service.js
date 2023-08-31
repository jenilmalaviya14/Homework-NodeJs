const Category  = require("../models/category");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createCategory = async (reqBody) => {
  return Category.create(reqBody);
};

const getCategoryList = async () => {
  return Category.find()
};

const deletecategory = async(categoryId) => {
  return Category.findByIdAndDelete(categoryId)
};

const getCategoryById = async (categoryId) => {
  return Category.findById(categoryId);
};

const updateDetails = async (categoryId, updateBody) => {
  return Category.findByIdAndUpdate(categoryId, { $set: updateBody });
};

module.exports = {
  createCategory,
  getCategoryList,
  deletecategory,
  getCategoryById,
  updateDetails
};
