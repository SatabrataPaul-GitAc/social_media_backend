const router = require("express").Router()

router.get("/", (req, res)=>{
    res.send({status: 200, message: "Welcome to users route"})
})

module.exports = router