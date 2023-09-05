const Useradd = require("../models/user_address")

const createUserAdd = async (reqBody) => {
    return Useradd.create(reqBody)
};

const listUserAdd = async () => {
    return Useradd.find({$or : [{is_active : "true"}]})
};

const getId = async (id) => {
    return Useradd.findById(id);
};

const deleteUserAdd = async (Id) => {
    return Useradd.findByIdAndDelete(Id)
};

const updateUserAdd = async (Id, updatebody) => {
    return Useradd.findByIdAndUpdate(Id, { $set: updatebody })
}

module.exports = { createUserAdd, listUserAdd, deleteUserAdd, getId, updateUserAdd }