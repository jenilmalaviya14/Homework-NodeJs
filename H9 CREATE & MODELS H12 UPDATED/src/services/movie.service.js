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
    return Movie.find()
};

const deleteMovie = async (Id) => {
    return Movie.findByIdAndDelete(Id)
}

const getMovieById = async (movieId) => {
    return Movie.findById(movieId);
};

const updateDetails = async (movieId, updateBody) => {
    return Movie.findByIdAndUpdate(movieId, { $set: updateBody });
};

module.exports = {
    createMovie,
    getMovie,
    deleteMovie,
    getMovieById,
    updateDetails
};
