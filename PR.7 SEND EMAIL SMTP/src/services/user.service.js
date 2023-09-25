const User = require("../models/user")

const createUser = async (reqBody) => {
    return User.create(reqBody)
};

const listUser = async () => {
    return User.find({ $or: [{ is_active: "true" }] }).populate()
};

const getId = async (id) => {
    return User.findById(id);
};

const deleteUser = async (Id) => {
    return User.findByIdAndDelete(Id)
};

const updateUser = async (Id, updatebody) => {
    return User.findByIdAndUpdate(Id, { $set: updatebody })
};

const getUserByEmail = async (email) => {
    return User.findOne({ email });
};

const deleteUserByEmail = async (email) => {
    return User.findOneAndDelete({ email: email });
  };

module.exports = { createUser, listUser, deleteUser, getId, updateUser, getUserByEmail, deleteUserByEmail }