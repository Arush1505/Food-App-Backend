const restaurant = require("../models/restaurant");

// create a restaurant

const create_restaurant = async (req, res) => {
  try {
    const key_length = Object.keys(req.body).length(); // validation

    if (key_length != 11) {
      res.status(500).send({ message: "Fill all the Feilds" });
    }

    const new_res1 = await restaurant.create({ obj });
    res
      .status(201)
      .send({ message: "Restaurant Created Successfully", data: new_res1 });
  } catch (error) {
    console.error(error);
  }
};

// Find all restaurant by ID

const get_all_restaurants = async (req, res) => {
  try {
    const all_res = await restaurant.find({}); // validation

    if (!all_res) {
      res.status(500).send({ message: "No restaurans" });
    }

    res
      .status(201)
      .send({
        message: "Restaurant Created Successfully",
        count: all_res.length(),
        data: all_res,
      });
  } catch (error) {
    console.error(error);
  }
};

// Find by id

const get_restaurant_by_id = async (req, res) => {
  try {
    const res_id = req.params.id;
    const res1 = await restaurant.findById(res_id);
    if (!res1) {
      res.status(404).send({ message: "Restaurant not found" });
    }
    res
      .status(201)
      .send({ message: "Restaurant Created Successfully", data: res1 });
  } catch (error) {console.log(error)}
};





const delete_res =  async (req, res) => {



try {
    

const res_id = req.params.id;
if( !res_id ){ res.status(400).send({ message: "Invalid restaurant id" }); }
const res1 = await restaurant.findByIdAndDelete(res_id);
 

} catch (error) {
    console.log(error)
}



}









module.exports = { create_restaurant, get_all_restaurants , delete_res};
