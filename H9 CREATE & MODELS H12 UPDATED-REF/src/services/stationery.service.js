const Stationery = require("../models/stationery");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createstationery = async (reqBody) => {
    return Stationery.create(reqBody);
};

const getstationery = async () => {
    return Stationery.find()
};

const deletestationery = async (Id) => {
    return Stationery.findByIdAndDelete(Id)
};

const getStationeryById = async (stationeryId) => {
    return Stationery.findById(stationeryId);
};

const updateDetails = async (stationeryId, updateBody) => {
    return Stationery.findByIdAndUpdate(stationeryId, { $set: updateBody });
};

module.exports = {
    createstationery,
    getstationery,
    deletestationery,
    getStationeryById,
    updateDetails
};
