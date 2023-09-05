const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    product_name: {
        type: String,
        trim: true
    },
    product_price: {
        type: String,
        trim: true
    },
    product_desc: {
        type: String,
        trim: true
    },
    prosuct_SKU: {
        type: Number,
        trim: true
    },
    is_active: {
        type: Boolean,
        default: true
    },
    category : {
        type : mongoose.Types.ObjectId,
        ref:'category'
    },
    discount : {
        type : mongoose.Types.ObjectId,
        ref:'discount'
    }
},
    {
        timestamps: true,
        versionKey: false
    });

const Product = mongoose.model("product", ProductSchema);
module.exports = Product;