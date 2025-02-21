const usermodel = require("../models/usermodel");
const { search } = require("../routes/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// User control Function is only for the Checking user data

const user_control = async (req, res) => {
  // console.log(req);
  // res.status(201).send({message:"User Body"});

  try {
    const user_id = req.body.id;
    const user_info = await usermodel.findOne(
      { _id: user_id },
      { password: 0 }
    );

    if (user_info) {
      res.status(201).status({
        success: "true",
        user_info,
      });
    } else {
      res
        .status(404)
        .send({ message: "User not found in file user_controller.js" });
    }
  } catch (error) {
    console.log(error);
  }
};

//  Update user

const update_user = async (req, res) => {
  try {
    const user_id = req.body.id;

    const user_info = await usermodel.findById({ _id: user_id });

    const { username, phone_number, address_new } = req.body;

    // Should user the same spelling in user_info as defined for the key in database

    user_info.username = username;
    user_info.phone_number = phone_number;
    user_info.address = address_new;
    user_info.save();
    res.status(201).send({ message: "User updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error updating user: " + error,
    });
  }
};

// Reste the password of user

const reset_password_email = async (req, res) => {
  try {
    // Take Input of email and securiy key
    const { email_user, security_key, new_password } = req.body;

    const user_info = await usermodel.findOne({ email: email_user }); // Get the user info from database
    if (user_info) {
      if (user_info.security == security_key) {
        const salt = await bcrypt.genSalt();
        const hashed_password = await bcrypt.hash(new_password, salt); // Hash it bro

        user_info.password = hashed_password;
        user_info.save();
        res.status(201).send({ message: "Password reset successfully" });
      } else {
        res.status(401).send({ message: "Invalid security key" });
      }
    } else {
      res.status(404).send({ message: "User email not found in Database" });
    }

    const { username, phone_number, address_new } = req.body;
  } catch (error) {
    console.error(error);
  }
};

const change_password = async (req, res) => {
  try {
    const { old_password, new_password } = req.body;
    const user_info = await usermodel.findById({ _id: req.body.id });
    if (user_info) {
      const match_true = await bcrypt.compare(old_password, user_info.password);
      if (match_true) {
        const salt = await bcrypt.genSalt();
        const hashed_password = await bcrypt.hash(new_password, salt); // Hash it bro
        user_info.password = hashed_password;
        user_info.save();
        res.status(201).send({ message: "Password changed successfully" });
      } else {
        res.status(401).send({ message: "Invalid old password" });
      }
    }
  } catch (error) {
    console.error(error);
  }
};

// Will ask for email and deletion key from the user

const delete_user = async (req, res) => {
  try {
    const { email, deletion_key } = req.body;
    const user_info = await usermodel.findOne({ email: email });
    if (user_info) {
      if (user_info.deletion_key === deletion_key) {
        await usermodel.findByIdAndDelete(user_info._id);
        res.status(200).send({ message: "User deleted successfully" });
      } else {
        res.status(401).send({ message: "Invalid deletion key" });
      }
    } else {
      res.status(404).send({ message: "No email associated" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = {
  user_control,
  update_user,
  reset_password_email,
  change_password,
  delete_user,
};

// For users details
// Jab bhi user login karega toh uska Ek id create hoga (Yeh Id wahi hoga vjo mongo db mei stored hoga uske docuemnt ke ssaaath)
// Ab user ko dhoondhne ke liye Uska yahi Id lenge aur mongo mei search karenge Jab tak nahi mil jaata
