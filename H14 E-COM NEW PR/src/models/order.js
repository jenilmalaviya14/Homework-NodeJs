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

const Order = mongoose.model("order", OrderSchema);
module.exports = Order;