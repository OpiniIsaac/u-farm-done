const mongoose = require("mongoose")
const passportLocalMongoose = require("passport-local-mongoose")
const authSignUp = mongoose.Schema({
    username:{
        type:String,
        trim:true,
    },
    uniqueId:{
        type:String,
        trim:true,
    },
    ward:{
        type:String,
        trim:true,
    },

    role:{
        type: String,
        default: 'FO'
    },
    password:{
        type:String,
        trim:true,
    }
})

authSignUp.plugin(passportLocalMongoose,);
module.exports = mongoose.model('AoSignUp',authSignUp);