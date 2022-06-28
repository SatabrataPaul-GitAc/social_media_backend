const express = require('express');
require('dotenv').config();
const helmet = require('helmet');
const morgan = require('morgan');
const mongoose = require('mongoose');
const userRoute = require('./routes/users')

//Establishing connection to mongodb database
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true}, ()=>{
    console.log("Connected to the database successfully");
})

//Creating our application
const app = express();

//middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan());

app.use('/api/users', userRoute)


//Starting the express application
app.listen(process.env.PORT, ()=>{
    console.log(`Backend server started on port ${process.env.PORT}`);
})
