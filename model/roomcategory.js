const mongoose = require('mongoose')
const bookroomschema= mongoose.Schema({

    hotelname:{
        type:String,
    },
    bed:{
        type:String,   
    },
    roomno:{
        type:Number,
        
    },
    name:{
        type:String
    },
    price:{
        type:String
    },
    date: {
        type: Date,
        default: Date.now,
      },
})
const Room_catagory = mongoose.model("Room_catagory", bookroomschema);
module.exports = Room_catagory;