const express = require('express');

const app =express();

const mongoose =require('mongoose');

const bodyPraser = require('body-parser');

const cors = require('cors');

require('dotenv/config');
//Middlewares
app.use(cors());
app.use(bodyPraser.json());


//Import Routes
const postsRoute = require('./routes/posts');

app.use('/', postsRoute);
//Routes
app.get('/',(req,res)=>{
    res.send('we are home');
})


//Connect to db
mongoose.connect(
    process.env.DB_CONNECTION,
{ useNewUrlParser : true}, ()=> console.log('connected to db'));

//how to we start listening to server
app.listen(9000); 