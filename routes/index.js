var express = require('express');
var router = express.Router();
const rolecontroller = require("../controller/rolecontroller")

/* GET home page. */
router.get('/', rolecontroller.get);
router.post('/', rolecontroller.post);

module.exports = router;


