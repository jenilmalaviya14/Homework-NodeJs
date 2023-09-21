const { Booking } = require("../models")

const createBooking = async (reqBody) => {
    return Booking.create(reqBody)
};

const listBooking = async () => {
    return Booking.find({ $or: [{ is_active: "true" }] }).populate("user").populate("bus")
};

const getId = async (id) => {
    return Booking.findById(id);
};

const deleteBooking = async (Id) => {
    return Booking.findByIdAndDelete(Id)
};

const updateBooking = async (Id, updatebody) => {
    return Booking.findByIdAndUpdate(Id, { $set: updatebody })
}

module.exports = { createBooking, listBooking, deleteBooking, getId, updateBooking }