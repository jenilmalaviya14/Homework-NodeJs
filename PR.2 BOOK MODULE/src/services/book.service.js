const Book = require("../models/book");

/**
 * Create category
 * @param {object} reqBody
 * @returns {Promise<Book>}
 */
const createBook = async (reqBody) => {
  return Book.create(reqBody);
};
const listBook = async () => {
  return Book.find();
};
const deleteBook = async(id) =>{
  return Book.findByIdAndDelete(id)
}

module.exports = { createBook, listBook, deleteBook }