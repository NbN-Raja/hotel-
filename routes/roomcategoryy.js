const express = require('express')

const router = express.Router()

const Room_catagory = require('../model/roomcategory')


router.get("/",(req,res)=>{
    res.send("Add Category for different hotels  room")


})

router.post("/",(req,res)=>{

    const rooms = new Room_catagory({
        name:req.body.name,
        hotelname:req.body.hotelname,
        roomno:req.body.roomno,
        bed:req.body.bed,
        price:req.body.price,
    })

    rooms.save()
    .then(result => {
        console.log(result);
        res.send({"message":"Room Added  successfully"})
        
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });

    

    
})

module.exports= router