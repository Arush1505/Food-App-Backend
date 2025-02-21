const jwt = require("jsonwebtoken");
const user_model = require("../models/user_model.js");
// Because it is a middleware , we need next()
//  do i need async function to verify middleware and token ?
// .split(" ")[1];
const authentiate_user =async (req, res, next) => {
  try {

const user_id = req.body.id;
const user_info = await user_model.findById(user_id);
if(user_info.user_type === "admin"){next();}
else{ res.status(401).json({message:"You are not authorized to access this route"})}


} catch (error) {
    console.log(error);
    res.status(403).send({ message: "You are not admin" });
  }
};
module.exports = {authentiate_user};