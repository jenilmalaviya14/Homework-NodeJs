const mongoose = require("mongoose");

const ElectronicSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    type: {
        type: String,
        trim: true
    },
    description: {
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

const Electronic = mongoose.model("electronic", ElectronicSchema);
module.exports = Electronic;