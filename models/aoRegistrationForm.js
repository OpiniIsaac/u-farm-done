const mongoose = require('mongoose')

const aoRegister = new mongoose.Schema({
    fullName:{
        type:String,
        trim:true
    },
    nin:{
        type:String,
        trim:true
    },
    phoneNumber:{
        type:String,
        trim:true
    },
    gender:{
        type:String,
        trim:true
    },
   
    dateOfBirth:{
        type:String,
        trim:true
    },

    residenceType:{
        type:String,
        trim:true
    },
    
    ward:{
        type:String,
        trim:true
    },
    uniqueId:{
        type:String,
        trim:true
    },
    activities:{
        type:String,
        trim:true
    },
    directions:{
        type:String,
        trim:true
    },
    dateOfRegistration:{
        type:String,
        trim:true
    },
    periodOfStay:{
        type:String,
        trim:true
    },
})

module.exports = mongoose.model('AoRegister', aoRegister)