const express = require('express')

const router = express.Router()

const Room = require('../model/bookroomschema')


router.get("/",(req,res)=>{
    res.send("Book a room")

})

router.post("/",(req,res)=>{

    const room = new Room({
        name:req.body.name,
        date:req.body.date,
        roomno:req.body.roomno,
    })

    room.save()
    .then(result => {
        console.log(result);
        res.send({"message":"Room Booked  success"})
        res.redirect("login")
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });

    

    
})

module.exports= router