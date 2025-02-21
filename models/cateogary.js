// const { default: mongoose } = require("mongoose");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// Cateogary should be of restaurant
const cateogary_schema = new Schema(
  {
    
    title:{ type:[String],required:true},

    image:{ type:String , default:"C:\Users\Arush\OneDrive\Pictures\Screenshots\photo.png"}

  },
  { timestamps: true }
); // automatically adds the created_at and updated_at fields

// Mongoose will make a collection with name as users in the database that too in the dtaabase
module.exports = mongoose.model("cateogary", cateogary_schema);

