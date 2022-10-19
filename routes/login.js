const express= require('express')

const router= express.Router()

const  logincontroller = require('../controller/loginController')

router.get('/',logincontroller.get)
router.post('/',logincontroller.post)





module.exports= router