const { Busoperator } = require("../models")

const createBusoperator = async (reqBody) => {
    return Busoperator.create(reqBody)
};

const listBusoperator = async () => {
    return Busoperator.find({ $or: [{ is_active: "true" }] })
};

const getId = async (id) => {
    return Busoperator.findById(id);
};

const deleteBusoperator = async (Id) => {
    return Busoperator.findByIdAndDelete(Id)
};

const updateBusoperator = async (Id, updatebody) => {
    return Busoperator.findByIdAndUpdate(Id, { $set: updatebody })
}

module.exports = { createBusoperator, listBusoperator, deleteBusoperator, getId, updateBusoperator }