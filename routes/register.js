const express = require('express')
const router= express.Router()

const  registercontroller = require('../controller/registercontroller')


router.get("/", registercontroller.get)
router.post("/", registercontroller.post)

module.exports= router