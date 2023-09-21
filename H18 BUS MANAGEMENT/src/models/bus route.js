const mongoose = require("mongoose");

const DiscountSchema = new mongoose.Schema({
    Bus_route: {
        type: String,
        trim: true
    },
    From: {
        type: String,
        trim: true
    },
    To: {
        type: Number,
        trim: true
    },
    Intermediate: {
        type: Number,
        trim: true
    },
    Distance: {
        type: Number,
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

const Discount = mongoose.model("discount", DiscountSchema);
module.exports = Discount;