const mongoose = require('mongoose')



const bookroomschema= mongoose.Schema({

    
    name:{
        type:String,   
    },
    roomno:{
        type:Number,
        
    },
    date: {
        type: Date,
        default: Date.now,
      },
    

})

const Room = mongoose.model("Room", bookroomschema);

module.exports = Room;