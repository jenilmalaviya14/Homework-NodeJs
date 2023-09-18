const mongoose = require("mongoose");
const config = require("../config/config");

const CarSchema = new mongoose.Schema({
    car_model: {
        type: String,
        trim: true
    },
    price: {
        type: String,
        trim: true
    },
    Year: {
        type: String,
        trim: true
    },
    colour: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    image: {
        type: String
    },
    is_active: {
        type: Boolean,
        default: true
    }
},
    {
        timestamps: true,
        versionKey: false,
        toJSON: {
            transform: function (doc, data) {
                if (data?.image) {
                    data.image = `${config.base_url}images/${data.image}`;
                }
            },
        },
    });

const Car = mongoose.model("car", CarSchema);
module.exports = Car;