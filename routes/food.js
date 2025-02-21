const express = require('express');
const { create_food ,get_by_id,update_food,update_food,delete_food} = require('/controllers/food.js');
const { authentiate_user } = require("/middleware/user_middleware.js");
const { admin_middleware } = require('../middleware/admin_middleware.js');

const router = express.Router();

// create food
route.post('/create',admin_middleware,create_food)


// get by id 
route.post('/get_by_id',authentiate_user,get_by_id)

// Update 
route.post('/update/:id',admin_middleware,update_food)

// Delete 
route.delete('/delete_food/:id',admin_middleware,delete_food)

module.exports = router;