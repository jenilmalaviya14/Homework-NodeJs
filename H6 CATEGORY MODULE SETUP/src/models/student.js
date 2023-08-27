const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    student_name: {
        type: String,
        trim: true
    },
    student_email: {
        type: String,
        trim: true
    },
    student_number: {
        type: Number,
        trim: true
    },
    student_course: {
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
    }
)

const student = mongoose.model("student", StudentSchema);
module.exports = student;