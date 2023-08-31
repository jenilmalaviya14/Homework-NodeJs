const Bus  = require("../models/bus");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createBus = async (reqBody) => {
  return Bus.create(reqBody);
};

const getBusList = async () => {
  return Bus.find()
};

const deleteBus = async(busId) => {
  return Bus.findByIdAndDelete(busId)
};

const getBusById = async (busId) => {
  return Bus.findById(busId);
};

const updateDetails = async (busId, updateBody) => {
  return Bus.findByIdAndUpdate(busId, { $set: updateBody });
};

module.exports = {
  createBus,
  getBusList,
  deleteBus,
  getBusById,
  updateDetails
};
