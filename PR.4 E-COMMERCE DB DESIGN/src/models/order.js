const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    total_order: {
        type: String,
        trim: true
    },
    order_quntity: {
        type: String,
        trim: true
    },
    order_location: {
        type: String,
        trim: true
    },
    courier: {
        type: String,
        trim: true
    },
    is_active: {
        type: Boolean,
        default: true
    },
    user : {
        type : mongoose.Types.ObjectId,
        ref:"user"
    },
    payment : {
        type : mongoose.Types.ObjectId,
        ref:"payment"
    },
    product : {
        type : mongoose.Types.ObjectId,
        ref:"product"
    }
},
    {
        timestamps: true,
        versionKey: false
    });

const Order = mongoose.model("order", OrderSchema);
module.exports = Order;