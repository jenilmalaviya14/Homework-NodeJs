const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name:{
        type:String,
        trim:true
    },
    last_name:{
        type:string,
        trim:true
    },
    email:{
        type: String | Number,
        trim:true
    },
    password:{
        type:String | Number,
    },
    is_active:{
        type:Boolean,
        default:true
    }
},
{
    timestamps: true,
    versionKey:false
}
);

const user = mongoose.model("user", userSchema);
module.exports= user;