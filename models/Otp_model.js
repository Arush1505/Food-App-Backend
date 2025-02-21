const mongoose = require("mongoose");

//schema
const otp_schema = new mongoose.Schema(
  {
phone_number:{type:String},
otp:{type:String},
otp_expiry:{type:Date}
  }

  // No need for timestamp
);

//export
module.exports = mongoose.model("Otp", otpSchema);