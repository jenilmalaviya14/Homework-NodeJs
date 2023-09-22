const { Legion } = require("../models")

const createLegion = async (reqBody) => {
    return Legion.create(reqBody)
};

const listLegion = async () => {
    return Legion.find({ $or: [{ is_active: "true" }] }).populate({ path: "laptop" });
};

const getId = async (id) => {
    return Legion.findById(id);
};

const deleteLegion = async (Id) => {
    return Legion.findByIdAndDelete(Id)
};

const updateLegion = async (Id, updatebody, image) => {
    const uploadimage = image.filename
    return Legion.findByIdAndUpdate(Id, { image: uploadimage }, { $set: updatebody })
}

module.exports = { createLegion, listLegion, deleteLegion, getId, updateLegion }