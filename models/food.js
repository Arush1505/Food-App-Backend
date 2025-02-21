const mongoose = require("mongoose");

//schema
const foodSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Food Title is require"],
    },
    description: {
      type: String,
      required: [true, " food description is requir"],
    },
    price: {
      type: Number,
      required: [true, "food price is require"],
    },
    imageUrl: {
      type: String,
      default:
        "https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png",
    },
    food_tags: {
      type: String,
    },
    catgeory: {
      type: String,
    },
    code: {
      type: String,
    },
    isAvailabe: {
      type: Boolean,
      default: true,
    },
    // check whether it will display the restaurant 
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "restaurant",
    },
    rating: {
      type: Number,
      default: 1,
      min: 1,
      max: 5,
    },
    ratingCount: {
      type:Number,
    },
  },
  { timestamps: true }
);

//export
module.exports = mongoose.model("Foods", foodSchema);