const express = require('express');
const router = express.Router();
 

const UploadProducts = require('../models/upload')


router.get('/public', async(req, res)=> {

    try{
      const data = await UploadProducts.find()
      console.log(data)
    
      res.render('public',{products:data});
    }catch(err){
      console.log(err)
    }
    
    });
    
  module.exports = router
    