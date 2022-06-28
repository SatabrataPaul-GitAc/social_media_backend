const router = require("express").Router()
const User = require('../models/User')

//REGISTER A USER
router.post("/register", async (req, res)=>{
    const body = req.body;
    const password = body.password;
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