const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
    quantity: {
        type: String,
        trim: true
    },
    SKU: {
        type:  Number,
        trim: true
    },
    password: {
        type: String,
        trim: true
    },
    returns: {
        type: String,
        trim: true
    },
    is_active: {
        type: Boolean,
        default: true
    },
    hp : {
        type : mongoose.Types.ObjectId,
        ref:"hp"
    },
    legion : {
        type : mongoose.Types.ObjectId,
        ref:"legion"
    },
},
    {
        timestamps: true,
        versionKey: false
    });

const Cart = mongoose.model("cart", CartSchema);
module.exports = Cart;