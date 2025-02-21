const express = require('express');
const { create_cateogary,update_category,delete_category } = require('/controllers/cateogary.js');
const {authentiate_user} = require("/middleware/user_middleware.js")
const router = express.Router();

//create restaurant
router.post('/create',  authentiate_user ,create_cateogary);

// // get all
// router.get('/get_all' ,get_all_restaurants);

// // get by ID
// router.post('/get_by_id/:id' ,get_all_restaurants);


// Update
router.put('/update',authentiate_user,update_category);    

// Delete
router.put('/update',authentiate_user,delete_category);    


module.exports = router;