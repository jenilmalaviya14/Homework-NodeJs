const mongoose = require("mongoose");

const BusSchema = new mongoose.Schema({
    Bus_number: {
        type: String,
        trim: true
    },
    Capacity: {
        type: String,
        trim: true
    },
    Type: {
        type: String,
        trim: true
    },
    Layout: {
        type: String,
        trim: true
    },
    amenities: {
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

    const Bus = mongoose.model("bus",BusSchema);
    module.exports=Bus;