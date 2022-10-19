
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
// const user= require('../model/userschema.js');
const User =require('../model/loginschema');





router.get('/',(req,res)=>{
    const email=req.body.email
    const getposts = User.find({});
    getposts.exec(function(err,data){
        if(err) throw err;
        res.send(data);
    })
    
})



module.exports=router;