const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
    hotel_name: {
        type: String,
        trim: true
    },
    hotel_email: {
        type: String,
        trim: true
    },
    hotel_address: {
        type: String,
        trim: true
    },
    hotel_phone: {
        type: String,
        trim: true
    },
    room_Price: {
        type: String,
        trim: true
    },
    hotel_desc: {
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

    const Hotel = mongoose.model("Hotel",hotelSchema);
    module.exports=Hotel;