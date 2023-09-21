const { Bus } = require("../models");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

const createBus = async (reqBody) => {
  return Bus.create(reqBody)
};

const listBus = async () => {
  return Bus.find({ $or: [{ is_active: "true" }] })
};

const deleteBus = async (id) => {
  return Bus.findByIdAndDelete(id)
};

const getId = async (id) => {
  return Bus.findById(id)
};

const updateBus = async (id, updateBody) => {
  return Bus.findByIdAndUpdate(id, { $set: updateBody })
}

module.exports = {
  createBus,
  listBus,
  deleteBus,
  getId,
  updateBus
};
