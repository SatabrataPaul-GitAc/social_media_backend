const express = require('express');
require('dotenv').config();
//Creating our application
const app = express();

//Starting the express application
app.listen(process.env.PORT, ()=>{
    console.log(`Backend server started on port ${process.env.PORT}`);
})
