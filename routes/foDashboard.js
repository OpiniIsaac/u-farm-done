const express = require('express');
const router = express.Router();

const FoRegister = require('../models/foRegistrationForm')

const UploadProducts = require('../models/upload')

router.get('/foDasboard', (req, res)=> {
  res.render('foDash');
});


router.get('/foRegistrartion', (req, res)=> {
  res.render('foRegistrartion');
});



router.get('/foApprove', async(req, res)=> {

try{
  const data = await UploadProducts.find()
  console.log(data)

  res.render('foApprove',{products:data});
}catch(err){
  console.log(err)
}

});





router.get('/foAuth', (req, res)=> {
  res.render('foAuth');
});

// registering urban farmers 
router.post('/registerUrbanFamer',async(req,res)=>{
    console.log(req.body)
  try{
    const register = new FoRegister(req.body)
    register.save()
    res.redirect('/foRegistrartion')
    console.log(req.body)
  }
  catch(err){
    console.log(err)
  }
  
  })

  module.exports= router


