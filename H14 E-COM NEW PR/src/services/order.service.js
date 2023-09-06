const Order = require("../models/order")

const createOrder = async (reqBody) => {
    return Order.create(reqBody)
};

const listOrder = async () => {
    return Order.find({$or : [{is_active : "true"}]}).populate("user").populate("hp").populate("legion")
};

const getId = async (id) => {
    return Order.findById(id);
};

const deleteOrder = async (Id) => {
    return Order.findByIdAndDelete(Id)
};

const updateOrder = async (Id, updatebody) => {
    return Order.findByIdAndUpdate(Id, { $set: updatebody })
}

module.exports = { createOrder, listOrder, deleteOrder, getId, updateOrder }