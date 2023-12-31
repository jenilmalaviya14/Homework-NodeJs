const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    product_name: {
        type: String,
        trim: true
    },
    product_desc: {
        type: String,
        trim: true
    },
    product_price: {
        type: Number,
        trim: true
    },
    product_offer: {
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
    }
)

const product = mongoose.model("product", productSchema);
module.exports = product;