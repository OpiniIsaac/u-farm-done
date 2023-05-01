const mongoose = require("mongoose")
const passportLocalMongoose = require("passport-local-mongoose")
const authSignUp = mongoose.Schema({
    username:{
        type:String,
        trim:true,
    },
    role:{
        type: String,
        default: 'ao'
    },
    password:{
        type:String,
        trim:true,
    }
})

authSignUp.plugin(passportLocalMongoose,);
module.exports = mongoose.model('Admin',authSignUp);