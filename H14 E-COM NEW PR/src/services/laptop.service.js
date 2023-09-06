const Laptop = require("../models/laptop")

const createLaptop = async (reqBody) => {
    return Laptop.create(reqBody)
};

const listLaptop = async () => {
    return Laptop.find({$or : [{is_active : "true"}]}).populate("electronic")
};

const getId = async (id) => {
    return Laptop.findById(id);
};

const deleteLaptop = async (Id) => {
    return Laptop.findByIdAndDelete(Id)
};

const updateLaptop = async (Id, updatebody) => {
    return Laptop.findByIdAndUpdate(Id, { $set: updatebody })
}

module.exports = { createLaptop, listLaptop, deleteLaptop, getId, updateLaptop }