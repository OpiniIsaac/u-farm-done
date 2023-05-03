const express = require('express');
const router = express.Router();
 const connectEnsureLogin = require("connect-ensure-login")


const UploadProducts = require('../models/upload')
const Message = require('../models/message')
const User = require('../models/user')

router.get('/public', async(req, res)=> {

    try{
      const data = await UploadProducts.find()
      console.log(data)
      const approvedProducts = data.filter(product => product.status === 'Approve');
    
      res.render('public',{products:approvedProducts});
    }catch(err){
      console.log(err)
    }
    
    });




router.get('/products/:productId',connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
  try {
    const product = await UploadProducts.findById(req.params.productId);
    res.render('productDetail', { product });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/products/:productId/messages', async (req, res) => {

 try{ const product = await UploadProducts.findById(req.params.productId);
  const user = await  User.findOne({ username: req.body.username});

  const message = new Message({
    fromUser: user._id,
    toUser: product.user,
    content: req.body.content,
  });

console.log(message)
  await message.save();

  res.redirect('/public');
  console.log(message)

}
  catch(err){
    console.log(err)
  }



});

router.get('/messages', async (req, res) => {
  try {
    // Find the logged-in user
    const user = await User.findById(req.user._id);

    // Find all messages for the logged-in user
    const messages = await Message.find({ toUser: user._id });

    // Render the dashboard view template with messages
    res.render('messages', { messages });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});


router.post("/signupGeneral", async(req,res)=>{
    console.log(req.body)
    try{
        const user = new User(req.body);
        let userName = await User.findOne({username:req.body.username})
        if(userName){
            return res.send("this unique id already exists")
        }
        else{
            await User.register(user,req.body.password,(error)=>{
                if(error){
                    throw error
                }
                res.redirect("/login")
            })
        }
    
    }

    catch(error){
        res.status(400).send("sorry it seems there is trouble accessing this page")
        console.log(error)
    }
})

    
  module.exports = router
    