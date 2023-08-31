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

const deletePharmacy = async (Id) => {
    return Pharmacy.findByIdAndDelete(Id)
};

const getPharmacyById = async (pharmacyId) => {
    return Pharmacy.findById(pharmacyId);
};

const updateDetails = async (pharmacyId, updateBody) => {
    return Pharmacy.findByIdAndUpdate(categoryId, { $set: updateBody });
};


module.exports = {
    createPharmacy,
    getPharmacy,
    deletePharmacy,
    getPharmacyById,
    updateDetails
};
