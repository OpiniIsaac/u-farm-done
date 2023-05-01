const express = require('express');
const app = express();

const User = require('../models/user');
const router = require('./aoDashboardRouts');

router.post("/foSignup", async(req,res)=>{
    console.log(req.body)
    try{
        const user = new User (req.body);
        let userName = await User.findOne({username:req.body.username})
        if(userName){
            return res.send("this unique id already exists")
        }
        else{
            await User.register(user,req.body.password,(error)=>{
                if(error){
                    throw error
                }
                res.redirect("/foAuth")
            })
        }
    
    }
    catch(error){
        res.status(400).send("sorry it seems there is trouble accessing this page")
        console.log(error)
    }
})


module.exports = router;