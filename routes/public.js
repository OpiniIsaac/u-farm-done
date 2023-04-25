const express = require('express');
const router = express.Router();
 

const UploadProducts = require('../models/upload')


router.get('/public', async(req, res)=> {

    try{
      const data = await UploadProducts.find()
      console.log(data)
      const approvedProducts = data.filter(product => product.status === 'approved');
    
      res.render('public',{products:approvedProducts});
    }catch(err){
      console.log(err)
    }
    
    });



router.get('/products/:productId', async (req, res) => {
  try {
    const product = await UploadProducts.findById(req.params.productId);
    res.render('productDetail', { product });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});



    
  module.exports = router
    