const Cart = require("../models/cart")

const createCart = async (reqBody) => {
    return Cart.create(reqBody)
};

const listCart = async () => {
    return Cart.find({$or : [{is_active : "true"}]})
};

const getId = async (id) => {
    return Cart.findById(id);
};

const deleteCart = async (Id) => {
    return Cart.findByIdAndDelete(Id)
};

const updateCart = async (Id, updatebody) => {
    return Cart.findByIdAndUpdate(Id, { $set: updatebody })
}

module.exports = { createCart, listCart, deleteCart, getId, updateCart }