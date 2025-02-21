const express = require('express');
// const {register_control,login} = require('../controllers/auth_user.js');
const { user_control , update_user , reset_password_email ,change_password} = require('../controllers/user_controller.js');
const { authentiate_user } = require('../middleware/user_middleware.js');
const router = express.Router();

router.get("/getuser",authentiate_user,user_control);

// UPDATE

router.get("/updateuser",authentiate_user,update_user);
router.get("/reset",authentiate_user,reset_password_email);  // When User Forgets the pass word , we need answer key
router.put("/change_password",authentiate_user,change_password); // Just need the old password
// delete user
router.delete("/deleteuser",authentiate_user,delete_user);

module.exports = router;