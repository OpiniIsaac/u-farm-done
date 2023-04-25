const express = require ("express");
const router = express.Router();
const passport = require ("passport");
// imported model
const User = require("../models/userModel")
const AoSignUp = require('../models/authSignUp')
const FoSignUp = require('../models/foSignUp')
router.get("/login",(req,res)=>{
    res.render("login")
});



router.post("/login", passport.authenticate("local", {failureRedirect: "/login"}), async(req,res)=>{
    req.session.user = req.user
    let userExist = await User.findOne({username: req.user.username,password: req.user.password});
    let urbanFarmer = await  AoSignUp.findOne({username: req.user.username,password: req.user.password});
    let  famerOne = await FoSignUp.findOne({username: req.user.username,password: req.user.password});
    console.log("this user exists", userExist)
    console.log("this is the user session:", req.session)
    // res.redirect("/students")
    if(req.user.role== "ao" && userExist){
        res.redirect("/aoDasboard")
    }
    else if(req.user.role== "uf" && urbanFarmer){
        res.redirect("/foDasboard")
    }
    else if(req.user.role== "fo" && famerOne){
        res.redirect("/fodash")
    }
    else{res.send("you are not registered")}
})

router.post("/logout", (req,res)=>{
    if(req.session){
        req.session.destroy((error)=>{
            if(error){
            res.status(400).send("unable to log out user")
        }else{
            return res.redirect("/login")
        }
    })
    }
})

module.exports = router