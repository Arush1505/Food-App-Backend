const express = require('express');
const {register_control,login} = require('../controllers/auth_user.js');
const router = express.Router();


router.post('/register',register_control);

router.post('/login',login);


module.exports = router;