const Mobile = require("../models/mobile");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

const createMobile = async (reqBody) => {
  return Mobile.create(reqBody)
};

const getMobile = async () => {
  return Mobile.find({$or : [{mobile_colour : "Black"}]})
};

const deleteMobile = async (id) => {
  return Mobile.findByIdAndDelete(id)
};

const getMobileById = async (id) => {
  return Mobile.findById(id)
};

const updateDetails = async (id, updateBody) => {
  return Mobile.findByIdAndUpdate(id, { $set: updateBody })
}

module.exports = {
  createMobile,
  getMobile,
  deleteMobile,
  getMobileById,
  updateDetails
};
