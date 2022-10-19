const mongoose = require('mongoose')



const loginschema= mongoose.Schema({

    
    email:{
        type:String,
        
    },
    phone:{
        type:Number,
        
    },
    password:{
        type:String,
        
        
    },

    date: {
        type: Date,
        default: Date.now,
      },

    role:{
        type:String,
        default:"user",
        enum: ["user", "admin", "superadmin"],
      }

})

const User = mongoose.model("User", loginschema);

module.exports = User;