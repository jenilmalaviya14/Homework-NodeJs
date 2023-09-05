const Category = require("../models/category")

const createCategory = async (reqBody) => {
    return Category.create(reqBody)
};

const listCategory = async () => {
    return Category.find({$or : [{is_active : "true"}]})
};

const getId = async (id) => {
    return Category.findById(id);
};

const deleteCategory = async (Id) => {
    return Category.findByIdAndDelete(Id)
};

const updateCategory = async (Id, updatebody) => {
    return Category.findByIdAndUpdate(Id, { $set: updatebody })
}

module.exports = { createCategory, listCategory, deleteCategory, getId, updateCategory }