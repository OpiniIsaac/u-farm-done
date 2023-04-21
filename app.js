const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const mongoose= require("mongoose");
const bodyParser= require("body-parser");
const session= require("express-session");
const passport = require("passport");

const config = require("./config/database");

const aoRoute = require('./routes/aoDashboardRouts')
const foRoute = require('./routes/foDashboard')
const publicRoutes = require('./routes/public')

const uploadRoute = require('./routes/upload')

const aoAuthRoute = require('./routes/aoAuth')
const foAuthRoute = require('./routes/foAuthRute')


const authSignUp = require('./models/authSignUp')





app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: false
}))

// * Passport middleware
app.use(passport.initialize());
app.use(passport.session());
passport.use(authSignUp.createStrategy());
passport.serializeUser(authSignUp.serializeUser());
passport.deserializeUser(authSignUp.deserializeUser());


// malter middlware 
app.use(express.static(path.join(__dirname , "public/products")))

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));


// creating a connection between the controller and database
mongoose.connect(config.database,{
    //useNEW collects data then formats it
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db= mongoose.connection
// checking if db has connected
db.once("open", ()=>{
console.log("connected to db")
})
db.on("error",(err)=>{
console.error(err)
})

app.set("view engine","pug");
app.set("views", path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.static('public'));


app.use('/',aoRoute )
app.use('/',aoAuthRoute )
app.use('/',foRoute)
app.use('/', foAuthRoute)
app.use('/',uploadRoute)
app.use('/',publicRoutes)

app.get("*", (req,res)=>{
    res.status(404).send("page does not exist")
})



app.listen(3000, () => console.log('listening on port 3000'));



