const mongoose = require("mongoose");
const config = require("../config/config");

const LegionSchema = new mongoose.Schema({
    model: {
        type: String,
        trim: true
    },
    price: {
        type: String,
        trim: true
    },
    processor: {
        type: String,
        trim: true
    },
    memory: {
        type: String,
        trim: true
    },
    colour: {
        type: String,
        trim: true
    },
    gaming: {
        type: String,
        trim: true,
        default: true
    },
    storage : {
        type: String,
        trim: true
    },
    description : {
        type: String,
        trim: true
    },
    image : {
        type: String
    },
    is_active: {
        type: Boolean,
        default: true
    },
    laptop : {
        type: mongoose.Types.ObjectId ,
        ref:"laptop"
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

const Legion = mongoose.model("legion_laptop", LegionSchema);
module.exports = Legion;