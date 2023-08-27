const Movie = require("../models/movie");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createMovie = async (reqBody) => {
    return Movie.create(reqBody);
};

const getMovie = async () => {
    return Movie.find({$or : [{is_active : true},{release_year : "11 April 1952"}]})
};

const deleteMovie = async (Id) => {
    return Movie.findByIdAndDelete(Id)
}


module.exports = {
    createMovie,
    getMovie,
    deleteMovie
};
