const Grocery = require("../models/grocery");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createGrocery = async (reqBody) => {
    return Grocery.create(reqBody);
};

const getGrocery = async () => {
    return Grocery.find()
};

const deleteGrocery = async (Id) => {
    return Grocery.findByIdAndDelete(Id)
};

const getGroceryById = async (groceryId) => {
    return Grocery.findById(groceryId);
  };

  const updateDetails = async (groceryId, updateBody) => {
    return Grocery.findByIdAndUpdate(groceryId, { $set: updateBody });
  };

module.exports = {
    createGrocery,
    getGrocery,
    deleteGrocery,
    getGroceryById,
    updateDetails
};
