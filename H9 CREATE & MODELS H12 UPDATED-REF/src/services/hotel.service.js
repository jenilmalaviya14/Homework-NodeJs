const Hotel = require("../models/hotel");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createhotel = async (reqBody) => {
  return Hotel.create(reqBody);
};

const gethotelList = async () => {
  return Hotel.find()
};

const deletehotel = async (hotelId) => {
  return Hotel.findByIdAndDelete(hotelId)
};

const hotelById = async (hoteId) => {
  return Hotel.findById(hoteId);
};

const updateDetails = async (hoteId, updateBody) => {
  return Hotel.findByIdAndUpdate(hoteId, { $set: updateBody });
};

module.exports = {
  createhotel,
  gethotelList,
  deletehotel,
  hotelById,
  updateDetails
};
