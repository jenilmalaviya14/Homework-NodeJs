const mongoose = require("mongoose");

const mobileSchema = new mongoose.Schema({
    mobile_company: {
        type: String,
        trim: true
    },
    mobile_model: {
        type: String,
        trim: true
    },
    mobile_colour: {
        type: String,
        trim: true
    },
    Ram: {
        type: String,
        trim: true
    },
    Rom: {
        type: String,
        trim: true
    },
    product_Price: {
        type: String,
        trim: true
    },
    product_Qty: {
        type: String,
        trim: true
    },
    product_desc: {
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

    const Mobile = mongoose.model("Mobile",mobileSchema);
    module.exports=Mobile;