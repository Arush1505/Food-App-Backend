// const usermodel = require("")

const usermodel = require("../models/usermodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Registration
const register_control = async (req, res) => {
  try {
    const { username, email, password, address, phone_number } = req.body;

    // VALIDATION

    if (!(username && email && password && address && phone_number)) {
      res.status(500).send({
        success: false,
        message: "Please fill all the fields",
      });
    }

    // Strat the entry

    try {
      const existing_user = await usermodel.findOne({ email });
      if (!existing_user) {
        const salt = await bcrypt.genSalt();
        const hashed_password = await  bcrypt.hash(password,salt);    // you can also create a function to hash the password LATER
        req.body.password = hashed_password;  // change the password into hashed password

        const new_user = await usermodel.create({ ...req.body });

        const token = jwt.sign({user_id : new_user._id}, process.env.secret_key,{expiresIn : "1hr"})
        if(new_user){res.status( 201).send({success:true,message:"User created successfully",new_user,token})}
        else{ res.status(500).send({success:false,message:"Failed to create user"})}




      } else {
        res.status(500).send({
          success: false,
          message: "Email already exists",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({
        succcess: false,
        message: "Error in database user creation",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in register control auth_user",
      error,
    });
  }
};




// LOGIN


const login = async (req, res) => {

try {

const {email,password} = req.body;
 

// check if the feilds are empty or not 
if(!email || !password){
  res.status(400).send({
    success: false,
    message: "Email and password are required",
    });
}


const user_existing = await usermodel.findOne({email})

if(!user_existing) {res.status(400).send({success: false, message: "Email not found",});}

// checking password
const stored_password = user_existing.password;
const match_true = await bcrypt.compare(password,stored_password);
if(!match_true){ res.status(400).send({success:"Laude se mere" , message : "Password galat hai"}) }
else{ 
  const token = jwt.sign({user_id : user_existing._id}, process.env.secret_key,{expiresIn : "7d"})
  // Make the password column invisible
  user_existing.password = undefined;
  res.status(200).send({success: true, message: "Badhai HO aap mumbai aarahe hai",user_existing,token
  }) }

}




catch (error) {
  console.log(error);
  res.status(500).send({
    success: false,
    message: "error in login control auth_user",
    });
  
}


}


module.exports = { register_control , login};
