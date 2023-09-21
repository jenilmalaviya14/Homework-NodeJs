const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
    Seat_number: {
        type: String,
        trim: true
    },
    Payment_details: {
        type: Number,
        trim: true
    },
    is_active: {
        type: Boolean,
        default: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
    bus: {
        type: mongoose.Types.ObjectId,
        ref: "bus"
    }
},
    {
        timestamps: true,
        versionKey: false
    });

const Booking = mongoose.model("booking", BookingSchema);
module.exports = Booking;