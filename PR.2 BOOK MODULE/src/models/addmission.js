const mongoose = require("mongoose");
const AddmSchema = new mongoose.Schema(
    {
        // student_id : Math.floor(Math.random() * 10000),
        student_name: {
            type: String,
            trim: true
        },
        student_bday: {
            type: Date,
            required: true,
            trim: true,
        },
        student_email: {
            type: String,
            // unique:[true,"Email already exist"],
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
    }
);

const addmDetails = mongoose.model("Addmission", AddmSchema)
module.exports = addmDetails;