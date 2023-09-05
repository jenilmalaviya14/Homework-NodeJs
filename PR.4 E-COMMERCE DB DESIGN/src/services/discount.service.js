const Discount = require("../models/discount")

const createDiscount = async (reqBody) => {
    return Discount.create(reqBody)
};

const listDiscount = async () => {
    return Discount.find({$or : [{is_active : "true"}]})
};

const getId = async (id) => {
    return Discount.findById(id);
};

const deleteDiscount = async (Id) => {
    return Discount.findByIdAndDelete(Id)
};

const updateDiscount = async (Id, updatebody) => {
    return Discount.findByIdAndUpdate(Id, { $set: updatebody })
}

module.exports = { createDiscount, listDiscount, deleteDiscount, getId, updateDiscount }