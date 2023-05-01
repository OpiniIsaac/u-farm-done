const mongoose = require("mongoose")
const passportLocalMongoose = require("passport-local-mongoose")
const famerOneScheme = mongoose.Schema({
    username:{
        type:String,
        trim:true,
    },
    uniqueId:{
        type:String,
        trim:true,
    },
    role:{
        type: String,
        default: 'uf'
    },
    password:{
        type:String,
        trim:true,
    }
})

famerOneScheme.plugin(passportLocalMongoose,);
module.exports = mongoose.model('FoSignUp',famerOneScheme);