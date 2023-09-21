const {Hp} = require("../models")

const createHp = async (reqBody) => {
    return Hp.create(reqBody)
};

const listHp = async () => {
    return Hp.find({$or : [{is_active : "true"}]}).populate("laptop")
};

const getId = async (id) => {
    return Hp.findById(id);
};

const deleteHp = async (Id) => {
    return Hp.findByIdAndDelete(Id)
};

const updateHp = async (Id, updatebody) => {
    return Hp.findByIdAndUpdate(Id, { $set: updatebody })
}

module.exports = { createHp, listHp, deleteHp, getId, updateHp }