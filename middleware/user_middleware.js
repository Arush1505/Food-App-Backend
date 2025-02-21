const jwt = require("jsonwebtoken");

// Because it is a middleware , we need next()
//  do i need async function to verify middleware and token ?
// .split(" ")[1];
const authentiate_user = (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ") [1];

    jwt.verify(token, process.env.secret_key, (err, decode) => {
      if (err) {
        return res.status(403).json({ message: "Invalid token" });
      } else {
        req.body.id = decode.user_id;  
         // Make sure the id name should be same as the id name required to create the token , this case user_id name was created
        next();
      }
    });
  } catch (error) {
    console.log(error);
    res.status(403).send({ message: "Invalid token Catch error" });
  }
};
module.exports = {authentiate_user};