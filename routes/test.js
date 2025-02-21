const express = require('express');
const route = express.Router();
const {test_api} = require("../controllers/test_user_control.js");
// route request handle 
route.get('/',test_api);
//export
module.exports = route