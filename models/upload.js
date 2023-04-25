const mongoose = require ('mongoose')


const UploadScheme = new mongoose.Schema({
   
   fullName:{
        type:String,
        trim:true
    },
   ward:{
        type:String,
        trim:true
    },
    productimage :{
        type:String,
        trim:true
    },
    
   date:{
        type:String,
        trim:true
    },
   unitPrice:{
        type:String,
        trim:true
    },
   quantity:{
        type:String,
        trim:true
    },
   payment:{
        type:String,
        trim:true
    },
   directions:{
        type:String,
        trim:true
    },
   delivery:{
        type:String,
        trim:true
    },
   produceType:{
        type:String,
        trim:true
    },
   status:{
        type:String,
        default:'pending'
    },

})

module.exports = mongoose.model('UploadProducts',UploadScheme)