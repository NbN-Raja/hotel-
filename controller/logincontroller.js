const Users= require("../model/loginschema")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
module.exports ={
    
    get:(req,res,next)=>{
        res.send("login")
    },

    post:(req,res)=>{
        
        const email=req.body.email
        const password=req.body.password
        
        Users.find({email:email})
        
        .then(user=> {
       if(user.length>1){
        res.status(404).json({
          message:"username not found"
          })
        }else{
            var hash = user.password;
            // console.log(hash);
      bcrypt.compare(password, hash, function(err, result) {
        
        if(err){
          res.status(404).json({
            message:"password auth Failed",
            
          })
        }
        if(result){
         const token= jwt.sign({
            
            userId :user[0]. _id

          },
           'secret',
           {
             expiresIn:'200'
           },
          )
          user.token = token;
          console.log(token);
          res.cookie('cookie_name', user[0].name);  
        //   res.render("about");
          // res.status(201).json({
          //   message:"User Found",
          //   user:user,
          //   token:token
            
            
            
            
          // } )

          

        }
    });
     }
   })
    }
}