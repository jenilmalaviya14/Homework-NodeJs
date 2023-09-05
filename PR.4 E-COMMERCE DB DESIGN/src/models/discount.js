const mongoose = require("mongoose");

const DiscountSchema = new mongoose.Schema({
    product_name: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    discount_percentage: {
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