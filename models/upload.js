const mongoose = require ('mongoose')

 
const UploadScheme = new mongoose.Schema({
   
    productName:{
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
    user: {
           type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: false,
          },

})

module.exports = mongoose.model('UploadProducts',UploadScheme)