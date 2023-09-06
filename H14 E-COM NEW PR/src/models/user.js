const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true
    },
    fisrt_name: {
        type: String,
        trim: true
    },
    last_name: {
        type: String,
        trim: true
    },
    telephone: {
        type: Number,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    is_active: {
        type: Boolean,
        default: true
    },
},
    {
        timestamps: true,
        versionKey: false
    }
)

const User = mongoose.model("user", UserSchema);
module.exports = User;