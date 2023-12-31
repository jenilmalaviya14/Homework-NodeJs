const Pharmacy = require("../models/pharmacy");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createPharmacy = async (reqBody) => {
    return Pharmacy.create(reqBody);
};

const getPharmacy = async () => {
    return Pharmacy.find()
};

const deletePharmacy = async (sclId) => {
    return Pharmacy.findByIdAndDelete(sclId)
}


module.exports = {
    createPharmacy,
    getPharmacy,
    deletePharmacy
};
