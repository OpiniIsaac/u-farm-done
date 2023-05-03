const express = require('express');
const router = express.Router();
const multer = require("multer")
const connectEnsureLogin = require("connect-ensure-login")
const UploadProducts = require('../models/upload')

router.get('/ufDash',connectEnsureLogin.ensureLoggedIn(),(req,res)=>{
    res.render('ufDash')
})



// Define the storage for uploaded files
let storage = multer.diskStorage({
    destination:(req,file,cb)=>{cb(null,"public/products")},
    filename:(req,file,cb)=>{cb(null,file.originalname)}
});

// Set up the multer middleware to handle the file upload
let imageupload = multer({storage:storage}).single('productimage');

// Route for rendering the upload page
router.get('/upload', (req, res) => {
    res.render('upload');
});

// Route for handling the product upload
router.post('/uploadProducts', (req, res) => {
    // Handle the file upload using the multer middleware
    imageupload(req, res, function(err) {
        if (err) {
            console.log(err);
            return res.send("Error uploading file.");
        }

        // Create a new product object with the user and file information
        const product = new UploadProducts({
            productName: req.body.productName,
            ward: req.body.ward,
            productimage: req.file.originalname,
            date: req.body.date,
            unitPrice: req.body.unitPrice,
            quantity: req.body.quantity,
            payment: req.body.payment,
            directions: req.body.directions,
            delivery: req.body.delivery,
            produceType: req.body.produceType,
            user: req.user.user // Assuming that req.user has a valid user field
        });

        // Save the product to the database
        product.save(function(err) {
            if (err) {
                console.log(err);
                return res.send("Error saving product.");
            }

            // Redirect back to the upload page
            res.redirect('/uploadPage');
        });
    });
});


module.exports = router;
