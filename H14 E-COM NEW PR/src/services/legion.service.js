const Legino = require("../models/legion")

const createLegino = async (reqBody) => {
    return Legino.create(reqBody)
};

const listLegino = async () => {
    return Legino.find({$or : [{is_active : "true"}]}).populate("laptop")
};

const getId = async (id) => {
    return Legino.findById(id);
};

const deleteLegino = async (Id) => {
    return Legino.findByIdAndDelete(Id)
};

const updateLegino = async (Id, updatebody) => {
    return Legino.findByIdAndUpdate(Id, { $set: updatebody })
}

module.exports = { createLegino, listLegino, deleteLegino, getId, updateLegino }