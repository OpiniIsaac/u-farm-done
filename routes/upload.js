const express = require('express');
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login")
const multer = require("multer")

const UploadProducts = require('../models/upload')

router.get('/uploadPage',(req,res)=>{
    res.render('upload')
})
let storage = multer.diskStorage({
    destination:(req,file,cb)=>{cb(null,"public/products")}, 
    filename:(req,file,cb)=>{cb(null,file.originalname)}})
let imageupload = multer({storage:storage})  // 
router.post('/uploadProducts',imageupload.single('productimage'),(req,res)=>{
    try{
        const products = new UploadProducts(req.body)
products.productimage= req.file.originalname  //alter and change the name of the product
      products.save()     
         res.redirect('/uploadPage')
    }
    catch(err){
        console.log(err)
        res.send("upload failed ${error}")

    }
})

module.exports = router

