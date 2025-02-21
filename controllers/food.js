
const food_modal = require("../models/food");


const create_food = async (res, req) => {
  try {
    const key_length = Object.keys(req.body).length();
    if (key_length != 11) {
      res.status(500).send({ message: "Invalid Request" });
    }
    await food_modal.create(req.body);
    res.status(201).send({ message: "Food item created successfully" });
  } catch (er) {
    console.log(er);
    res.status(500).send({ message: "Internal Server Error" });
  }
};


const update_food = async (req, res) => {
    try {

        const user_id = req.params.id;
        const keys_array = Object.keys(req.body); 
        const food_info = await food_modal.findById(user_id);
        if (!food_info) { res.status(404).send({ message: "Food item not found" }); }
        
keys_array.forEach( ele =>{
    // food_info.ele = req.body.ele;   Do not use .  If you used dot notation, it would look like this (which wouldn't work for dynamic property names):
    food_info[ele] = req.body[ele];  // it will first resolve the variavle name , then update the valus , preferred 
})
await food_info.save();
res.status(200).send({ message: "Food item updated successfully" });

    } catch (er) {
      console.log(er);
      res.status(500).send({ message: "Internal Server Error" });
    }
};




const delete_food = async (req, res) => {
    try {

        
        const user_id = req.params.id;
        const food_info = await food_modal.findByIdAndDelete(user_id);
        if( !food_info) { res.status(404).send({ message: "Food item not found"})
            }
        res.status(200).send({ message: "Food item deleted successfully" });
        
    } catch (er) {
      console.log(er);
      res.status(500).send({ message: "Internal Server Error" });
    }
};
  



module.exports = {
  create_food,
  update_food,
  delete_food,
};
