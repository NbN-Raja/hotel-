var express = require('express');
var router = express.Router();
const superadmincontroller = require("../controller/superadmincontroller")

/* GET home page. */
router.get('/', superadmincontroller.get);
router.post('/', superadmincontroller.post);

module.exports = router;




