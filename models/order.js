const mongoose = require("mongoose");

//schema
const orderSchema = new mongoose.Schema(
  {
    food:[
        {type:mongoose.Schema.Types.ObjectId,
        ref:"food"}
    ],

    payment:{

    }
    ,
    buyer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },

    status:{
        type:String,
        enum:["Accepted","preparing","On the way","delivered"],
        default:"..."
    }

  },
  { timestamps: true }
);

//export
module.exports = mongoose.model("order", orderSchema);