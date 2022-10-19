
const express= require('express')

const router= express.Router()
const Users= require('../model/loginschema')
const bcrypt = require('bcrypt');

router.get('/',(req,res)=>{

})


router.post('/',(req,res)=>{

    const email=req.body.email
    const password=req.body.password
    
    Users.find({email:email})
    
    .then(user=> {
   if(user.length>1){
    res.status(404).json({
      message:"email not found"
      })
    }else{
        var hash = user[0].password;
        const role = user.role
        // console.log(hash);
  bcrypt.compare(password, hash, function(err, result) {
    
    if(err &&role==="superadmin"){
      res.status(404).json({
        message:"password auth Failed",
        
      })
      
    } else
    if(result){
   
    res.status(200).json({
        message:"Login Successfully as superadmin"
        })
      
    }else{
        res.status(301).json({
            message:"you are not superadmin"
        })
    }
});
 }
})



})




module.exports= router