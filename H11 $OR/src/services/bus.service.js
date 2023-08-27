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
  return Bus.find({$or : [{is_active : true},{bus_name : "Rhythm Travel"}]})
};

const deleteBus = async(busId) => {
  return Bus.findByIdAndDelete(busId)
}


module.exports = {
  createBus,
  getBusList,
  deleteBus
};
