const express = require('express');
const router = express.Router();

const FoRegister = require('../models/foRegistrationForm')

const UploadProducts = require('../models/upload')
const connectEnsureLogin = require("connect-ensure-login")

router.get('/foDasboard',connectEnsureLogin.ensureLoggedIn(), (req, res)=> {
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


  router.get("/edit_product/:id", async(req,res)=>{
    try{
        const item= await UploadProducts.findOne({_id:req.params.id});
        console.log(item)
        res.render("productApproval", {product:item});
    }
    catch(err){
        res.send("could not find student");
        console.log(err)
    }
});



router.post("/edit_product", async(req,res)=>{
    try{
        await UploadProducts.findOneAndUpdate({_id:req.query.id},req.body)
        res.redirect("/foApprove")
    }
    catch(err){
        res.send("failed to update student details")
        console.log(err)
    }
    
});

  module.exports= router


