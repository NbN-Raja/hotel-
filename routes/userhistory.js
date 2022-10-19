const express = require('express')

const router = express.Router()

const Room = require('../model/bookroomschema')


router.get("/",(req,res)=>{
    
    res.send("User History is here!")

})



module.exports= router
