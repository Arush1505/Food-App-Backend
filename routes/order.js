const express = require('express');
const { order_food} = require('/controllers/Order.js');
const { authentiate_user } = require("/middleware/user_middleware.js");
const { admin_middleware } = require('../middleware/admin_middleware.js');

const router = express.Router();

// Place your Order
route.post('/place_order',authentiate_user,order_food)


// Check status 
route.post('/status/:id',authentiate_user,delete_food)

module.exports = router;