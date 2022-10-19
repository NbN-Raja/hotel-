
const User = require('../model/loginschema')
const bcrypt = require('bcrypt');

module.exports={

    get:(req,res)=>{
        res.send("regster get ")
    },

    post:(req,res)=>{
        
        User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length >= 1) {
        return res.status(409).send({
          message: "Mail exists"
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err
            });
          } else {
            
            const user = new User({
          
              email: req.body.email,
              password: hash,
              role: "admin"
            });
            user
              .save()
              .then(result => {
                // console.log(result);
                res.send({"message":"Register success"})
                // res.redirect("login")
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                });
              });
          }
        });
      }
    });
        

        
    }
}