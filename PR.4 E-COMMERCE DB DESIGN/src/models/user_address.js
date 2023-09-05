const mongoose = require("mongoose");

const UseraddSchema = new mongoose.Schema({
    address: {
        type: String,
        trim: true
    },
    city: {
        type: String,
        trim: true
    },
    state: {
        type: String,
        trim: true
    },
    country: {
        type: String,
        trim: true
    },
    pincode: {
        type: Number,
        trim: true
    },
    telephone: {
        type: Number,
        trim: true
    },
    is_active: {
        type: Boolean,
        default: true
    },
    user : {
        type : mongoose.Types.ObjectId,
        ref:'user'
    }
},
    {
        timestamps: true,
        versionKey: false
    });

const Useradd = mongoose.model("useraddress", UseraddSchema);
module.exports = Useradd;