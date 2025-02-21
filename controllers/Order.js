const order_modal = require("../models/order.js");

const order_food = async (res, req) => {
  try {
    const { cart, payment } = req.body;

    const total = 0;
    cart.map((ele) => {
      total += ele.price;
    });
    // we will take array of foods
    const new_order = await order_modal.create({
      food: cart.foods,
      payment: payment,
      buyer: req.body.id,
    });
    res
      .status(500)
      .send({
        message: "Order placed successfully",
        data: new_order,
        total: total,
      });
  } catch (er) {
    console.log(er);
    res.status(500).send({ message: "Internal Server Error" });
  }
};








const status_order = async (res, req) => {
try {
  const order_id  = req.body.id;
  const {status} = req.body;
  const order_info = order_modal.findByIdAndUpdate(user_id,{status},{new:true})   // Here the order_info returns back the updated document in order_info rather than the original document
 res.status(200).send({message:"Order status updated successfully",data:order_info})


} catch (error) {
  console.lof(error)
}

}

module.exports = {
  order_food,
  status_order
};
