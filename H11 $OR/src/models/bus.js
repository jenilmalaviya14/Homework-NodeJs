const mongoose = require("mongoose");

const busSchema = new mongoose.Schema({
    bus_name: {
        type: String,
        trim: true,
    },
    bus_number: {
        type: String,
        trim: true,
        required: true
    },
    bus_company: {
        type: String,
        trim: true,
        required: true
    },
    bus_year: {
        type: String,
        trim: true,
        required: true
    },
    bus_capacity: {
        type: String,
        trim: true,
        required: true
    },
    is_active: {
        type: Boolean,
        default: true,
        required: true
    }
},
    {
        timestamps: true,
        versionKey: false
    }
);

const Bus = mongoose.model("Bus", busSchema);
module.exports = Bus;