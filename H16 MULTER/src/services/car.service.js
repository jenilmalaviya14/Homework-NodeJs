const {Car} = require("../models")

const createCar = async (reqBody) => {
    return Car.create(reqBody)
};

const listCar = async () => {
    return Car.find({$or : [{is_active : "true"}]})
};

const getId = async (id) => {
    return Car.findById(id);
};

const deleteCar = async (Id) => {
    return Car.findByIdAndDelete(Id)
};

const updateCar = async (Id, updatebody) => {
    return Car.findByIdAndUpdate(Id, { $set: updatebody })
}

module.exports = { createCar, listCar, deleteCar, getId, updateCar }