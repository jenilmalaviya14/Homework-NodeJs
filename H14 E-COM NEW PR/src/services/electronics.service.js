const Electronic = require("../models/electronics")

const createElectronic = async (reqBody) => {
    return Electronic.create(reqBody)
};

const listElectronic = async () => {
    return Electronic.find({$or : [{is_active : "true"}]})
};

const getId = async (id) => {
    return Electronic.findById(id);
};

const deleteElectronic = async (Id) => {
    return Electronic.findByIdAndDelete(Id)
};

const updateElectronic = async (Id, updatebody) => {
    return Electronic.findByIdAndUpdate(Id, { $set: updatebody })
}

module.exports = { createElectronic, listElectronic, deleteElectronic, getId, updateElectronic }