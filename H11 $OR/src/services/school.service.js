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
    return School.find({ $or: [{ is_active: true }, { school_name: "London Of School" }] })
};

const deleteschool = async (sclId) => {
    return School.findByIdAndDelete(sclId)
}


module.exports = {
    createschool,
    getSchool,
    deleteschool
};
