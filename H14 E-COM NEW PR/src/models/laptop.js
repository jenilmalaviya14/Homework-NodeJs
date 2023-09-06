const mongoose = require("mongoose");

const LaptopSchema = new mongoose.Schema({
    Company: {
        type: String,
        trim: true
    },
    type: {
        type: String,
        trim: true
    },
    touch_and_notouch: {
        type: String,
        trim: true
    },
    accessories : {
        type: String,
        trim: true
    },
    is_active: {
        type: Boolean,
        default: true
    },
    electronic: {
        type : mongoose.Types.ObjectId,
        ref  :"electronic",
    }
},
    {
        timestamps: true,
        versionKey: false
    });

const Laptop = mongoose.model("laptop", LaptopSchema);
module.exports = Laptop;