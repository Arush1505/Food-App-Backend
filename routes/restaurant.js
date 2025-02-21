const express = require('express');
const { create ,get_all_restaurants,delete_res} = require('../controllers/restaurant_controller.js');
const { admin_middleware } = require('../middleware/admin_middleware.js');
const router = express.Router();

//create restaurant
router.post('/create',  admin_middleware ,create);


// get all
router.get('/get_all' ,get_all_restaurants);

// get by ID
router.post('/get_by_id/:id' ,get_all_restaurants);


// delete
router.delete('/delete/:id' ,admin_middleware,delete_res);    
 
module.exports = router;