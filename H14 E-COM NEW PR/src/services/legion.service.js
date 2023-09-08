const Legino = require("../models/legion")

const createLegion = async (reqBody) => {
    return Legino.create(reqBody)
};

const listLegion = async () => {
    return Legino.find({$or : [{is_active : "true"}]}).populate({path : "laptop"})
};

const getId = async (id) => {
    return Legino.findById(id);
};

const deleteLegion = async (Id) => {
    return Legino.findByIdAndDelete(Id)
};

const updateLegion = async (Id, updatebody) => {
    return Legino.findByIdAndUpdate(Id, { $set: updatebody })
}

module.exports = { createLegion, listLegion, deleteLegion, getId, updateLegion }