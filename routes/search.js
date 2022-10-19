const express = require('express')

const router = express.Router()

const Room_catagory = require('../model/roomcategory')
const User = require('../model/loginschema')



// hotel rrom search 

router.get("/",(req,res)=>{
    
    const hotelname=req.body.hotelname
    
    const getposts = Room_catagory.find({hotelname:hotelname});
    getposts.exec(function(err,data){
        if(err) throw err;
        res.send(data);
    })

})

// search by price name 
router.get("/price",(req,res)=>{
    
    const price=req.body.price
    
    const getposts = Room_catagory.find({price:price});
    getposts.exec(function(err,data){
        if(err) throw err;
        res.send(data);
    })

})


// Search by email 

router.get("/email",(req,res)=>{
    
    const email=req.body.email
    
    const getposts = User.find({email:email});
    getposts.exec(function(err,data){
        if(err) throw err;
        res.send(data);
    })

})





module.exports= router
