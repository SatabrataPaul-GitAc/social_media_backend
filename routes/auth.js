const router = require("express").Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');


//Function to generate hashed password
async function generateHash(password){
    const salt = await bcrypt.genSalt(16);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword
}


//REGISTER A USER
router.post("/register", async (req, res)=>{
    const body = req.body;
    if (!body.username){
        res.status(400).json({message: "username is missing"});
    }
    if (!body.email){
        res.status(400).json({message: "Email address is missing"});
    }
    if (!body.password){
        res.status(400).json({message: "Password is missing"});
    }

    const user = User.findOne({email: body.email})
    if (user){
        res.status(400).json({message: "User already exists"})
    }

    const password = await generateHash(body.password)
    const newUser = User({
        userName: body.username,
        email: body.email,
        password: password,
    })

    try {
        await newUser.save();
        res.status(200).json({message: "User registered successfilly"});
    }catch(err){
        console.log(err);
        res.status(500).json({message: "Server error"})
    }
})

module.exports = router