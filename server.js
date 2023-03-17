console.clear();
const express = require('express');
const connectDB = require('./config/dbConnect');
const cors = require('cors');

//initializing express
const app = express();

require('dotenv').config();

connectDB();
app.use(cors());
app.use(express.json());
app.use('/user',require ('./routes/user'));
app.use('/product',require ('./routes/product'));
app.use('/order', require('./routes/order'))


PORT=process.env.PORT;
app.listen(PORT,(err)=>{ 
    (err)?console.log(err):
    console.log("Server is running on port ")
})