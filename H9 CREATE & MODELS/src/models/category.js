const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    category_name: {
        type: String,
        trim: true,
        required: [true,'Category name cannot be empty']
    },
    category_desc: {
        type: String,
        trim: true,
        required: true
    },
    is_active: {
        type: Boolean,
        default: true,
        required: true

    },
},
    {
        timestamps: true,
        versionKey: false
    }
);

const category = mongoose.model("category", categorySchema);
module.exports = category;