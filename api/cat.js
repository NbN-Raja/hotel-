
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
// const user= require('../model/userschema.js');
const Room_catagory =require('../model/roomcategory');





router.get('/',(req,res)=>{
    const email=req.body.email
    const getposts = Room_catagory.find({});
    getposts.exec(function(err,data){
        if(err) throw err;
        res.send(data);
    })
    
})



module.exports=router;