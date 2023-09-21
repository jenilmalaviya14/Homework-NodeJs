const { Busroute } = require("../models")

const createBusroute = async (reqBody) => {
    return Busroute.create(reqBody)
};

const listBusroute = async () => {
    return Busroute.find({ $or: [{ is_active: "true" }] })
};

const getId = async (id) => {
    return Busroute.findById(id);
};

const deleteBusroute = async (Id) => {
    return Busroute.findByIdAndDelete(Id)
};

const updateBusroute = async (Id, updatebody) => {
    return Busroute.findByIdAndUpdate(Id, { $set: updatebody })
}

module.exports = { createBusroute, listBusroute, deleteBusroute, getId, updateBusroute }