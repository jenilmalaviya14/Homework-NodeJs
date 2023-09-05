const Payment = require("../models/payment")

const createPayment = async (reqBody) => {
    return Payment.create(reqBody)
};

const listPayment = async () => {
    return Payment.find({$or : [{is_active : "true"}]})
};

const getId = async (id) => {
    return Payment.findById(id);
};

const deletePayment = async (Id) => {
    return Payment.findByIdAndDelete(Id)
};

const updatePayment = async (Id, updatebody) => {
    return Payment.findByIdAndUpdate(Id, { $set: updatebody })
}

module.exports = { createPayment, listPayment, deletePayment, getId, updatePayment }