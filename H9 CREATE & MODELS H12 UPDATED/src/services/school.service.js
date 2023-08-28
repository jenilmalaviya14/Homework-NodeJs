const School = require("../models/school");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createschool = async (reqBody) => {
    return School.create(reqBody);
};

const getSchool = async () => {
    return School.find()
};

const deleteschool = async (sclId) => {
    return School.findByIdAndDelete(sclId)
};

const getSchoolById = async (SchoolId) => {
    return School.findById(SchoolId);
};

const updateDetails = async (SchoolId, updateBody) => {
    return School.findByIdAndUpdate(SchoolId, { $set: updateBody });
}


module.exports = {
    createschool,
    getSchool,
    deleteschool,
    getSchoolById,
    updateDetails
};
