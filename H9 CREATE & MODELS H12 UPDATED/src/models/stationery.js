const mongoose = require("mongoose");

const stationerySchema = new mongoose.Schema({
    stationery_name: {
        type: String,
        trim: true,
    },
    books: {
        type: String,
        trim: true,
        required: true
    },
    calender: {
        type: String,
        trim: true,
        required: true
    },
    pens: {
        type: String,
        trim: true,
        required: true
    },
    HB_Pencils: {
        type: String,
        trim: true,
        required: true
    },
    stationery_desc: {
        type: String,
        trim: true,
        required: true
    },
},
    {
        timestamps: true,
        versionKey: false
    }
);

const Stationary = mongoose.model("Stationery", stationerySchema);
module.exports = Stationary;