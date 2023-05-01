const mongoose = require("mongoose")
const passportLocalMongoose = require("passport-local-mongoose")
const generalPublic = mongoose.Schema({
    username:{
        type:String,
        trim:true,
    },
    email: {
            type: String,
            required: true,
            unique: true,
          },
    password:{
        type:String,
        trim:true,
    }
})

generalPublic.plugin(passportLocalMongoose,);
module.exports = mongoose.model('GeneralPublic',generalPublic);