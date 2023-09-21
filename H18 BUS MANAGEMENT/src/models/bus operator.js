const mongoose = require("mongoose");

const BusoperatorSchema = new mongoose.Schema({
    bus_operator: {
        type: String,
        trim: true
    },
    contact_details: {
        type: String,
        trim: true
    },
    associated: {
        type: String,
        trim: true
    },
    is_active: {
        type: Boolean,
        default: true
    }
},
    {
        timestamps: true,
        versionKey: false
    });

const Busoperator = mongoose.model("busoperator", BusoperatorSchema);
module.exports = Busoperator;