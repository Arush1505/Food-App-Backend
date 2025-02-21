// const { default: mongoose } = require("mongoose");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const restaurantSchema = new Schema(
  {
    
    title:{ type:String,required:true},
    description:{ type:String,required:true},
    image:{ type:String},
    foods:{ type:array,required:true},
    open_time:{ type:String,required:true},
    close_time:{ type:String,required:true},
    dine_in:{ type:Boolean,required:true,default:false},
    delivery:{ type:Boolean,required:true,default:false},
    isOpen:{ type:Boolean,required:true,default:false},
    logo:{ type:String},
    address:{ type:String,required:true},
    rating:{ type:Number,required:true,default:1,values:[1,2,3,4,5] },

  },
  { timestamps: true }
); // automatically adds the created_at and updated_at fields

// Mongoose will make a collection with name as users in the database that too in the dtaabase
module.exports = mongoose.model("restaurant", restaurantSchema);
