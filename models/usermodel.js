// const { default: mongoose } = require("mongoose");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "please enter valid username"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "please enter valid email"],
    },
    password: {
      type: String, // no type like passowrd,
      required: [true, "please enter valid password"],
    },

    phone_number: {
      type: Number,
      unique: true, // Unique
      required: [true, "please enter valid phone number"],
    },
    // Feature , using the Pincode detect the location of the user Automaticcally
    address: {
      type: String,
      required: [true, "please enter valid Your address"],
    },

    user_type: {
      type: String,
      required: [true, "please Select user type"],
      enum: ["client", "admin", "delivery person"],
      default: "client",
    },

    // store whether the student is from hostel or the day scholar or staff
    //   premises:{
    //     type:String,
    //     enum:["hostel","day scholar","staff"],
    //     required:[ true,"please enter valid from where are  you "],
    //   },

    security: {
      type: String,
      required: [
        true,
        "Enter Something you will remember Like your first school ",
      ],
    },
    
    deletion: {
      type: String,
      required: [
        true,
        "Enter Something you Required if you delete the account ",
      ],
    },
    // Picture upload not just the link
    profile_pic: {
      type: String,
      default:
        "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkzNy1hZXctMTY1LWtsaGN3ZWNtLmpwZw.jpg",
    },
  },
  { timestamps: true }
); // automatically adds the created_at and updated_at fields

// Mongoose will make a collection with name as users in the database that too in the dtaabase
module.exports = mongoose.model("user", userSchema);
