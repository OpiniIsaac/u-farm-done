const express = require('express');
const router = express.Router();
const AoRegister = require('../models/aoRegistrationForm')
const User = require('../models/user')


const connectEnsureLogin = require("connect-ensure-login")


router.get('/aoDasboard',connectEnsureLogin.ensureLoggedIn(),(req, res)=> {
  res.render('aoDash');
});
router.get('/aoRegistration', (req, res)=> {
  res.render('aoRegistration');
});
router.get('/FO_appoint', (req, res)=> {
  res.render('FO_appoint');
});

// getting registered famers from db


router.get('/aoAuth', (req, res)=> {
  res.render('aoAuth');
});
router.get('/registeredFarmerOne', async(req, res)=> {

try{
const items = await AoRegister.find()
res.render('registeredFarmerOne', {farmers:items})


}
catch(err){
  console.log(err)
}
});


// registering farmer one

router.post('/register',async(req,res)=>{
  console.log(req.body)
try{
  const register = new AoRegister(req.body)
  register.save()
  res.redirect('/aoRegistration')
  console.log(req.body)
}
catch(err){
  console.log(err)
}

})

// updating famer one activities

router.get("/edit_FarmerOne/:id", async(req,res)=>{
  try{
      const item= await AoRegister.findOne({_id:req.params.id});
      res.render("appointFarmerOne", {farmer:item});
  }
  catch(err){
      res.send("could not find student");
      console.log(err)
  }
});


router.post("/edit_FarmerOne", async(req,res)=>{
  try{
      await AoRegister.findOneAndUpdate({_id:req.query.id},req.body)
      res.redirect("/registeredFarmerOne")
  }
  catch(err){
      res.send("failed to update student details")
      console.log(err)
  }
});




  module.exports = router