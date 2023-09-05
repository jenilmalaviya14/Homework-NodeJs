const Product = require("../models/product")

const createProduct = async (reqBody) => {
    return Product.create(reqBody)
};

const listProduct = async () => {
    return Product.find({$or : [{is_active : "true"}]})
};

const getId = async (id) => {
    return Product.findById(id);
};

const deleteProduct = async (Id) => {
    return Product.findByIdAndDelete(Id)
};

const updateProduct = async (Id, updatebody) => {
    return Product.findByIdAndUpdate(Id, { $set: updatebody })
}

module.exports = { createProduct, listProduct, deleteProduct, getId, updateProduct }