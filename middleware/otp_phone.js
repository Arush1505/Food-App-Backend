const otp_modal = require("/models/Otp_model.js");

// send otp

const send_otp = async (req,res) => {
const {phone_number} = req.body;
// Make otp

const New_otp = Math.floor(100000+Math.random()*9000).toString     // Because if the number generated  comes 0.1 , then multiply it with 900000  will make a 5 digit number , In order to make it 6 digit , we addd minimum six dgit number , thus it will also not affect of the number produced is the greateest

const otp_expiry = new Date(Date.now() + 5*60000)



}