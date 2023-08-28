const Music = require("../models/music");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createMusic = async (reqBody) => {
    return Music.create(reqBody);
};

const getMusic = async () => {
    return Music.find()
};

const deleteMusic = async (Id) => {
    return Music.findByIdAndDelete(Id)
};

const getMusicById = async (musicId) => {
    return Music.findById(musicId);
};

const updateDetails = async (musicId, updateBody) => {
    return Music.findByIdAndUpdate(musicId, { $set: updateBody });
};

module.exports = {
    createMusic,
    getMusic,
    deleteMusic,
    getMusicById,
    updateDetails
};
