const cateogary = require("../models/cateogary.js");

// create a restaurant

const create_cateogary = async (req, res) => {
  try {
    const { image, title } = req.body;
    if (!image || !title) {
      res.status(500).send({ success: false, message: "Galat hai" });
    }

    await restaurant.create({ title: title, image: image });
    res
      .status(200)
      .send({ success: true, message: "Category  created successfully" });
  } catch (error) {
    console.error(error);
  }
};

const update_category = async (req, res) => {
  try {
    const user_id = req.body.id;
    const { new_image, new_title } = req.body;
    const new_user = await cateogary.findById({ _id: user_id });
    if (!new_user) {
      res.status(404).send({ success: false, message: "User not found" });
    }
    new_user.image = new_image;
    new_user.title = new_title;
    await new_user.save();
    res
      .status(200)
      .send({ success: true, message: "Category updated successfully" });
  } catch (error) {
    console.log(error);
  }
};




const delete_category = async(req,res)=>{
    try {
        const user_id = req.body.id;
        if(!user_id)
        { res.status(404).send({success:false,message:"User not found"})}

        await cateogary.findByIdAndDelete({_id:user_id});
        res.status(200).send({success:true,message:"Category deleted successfully"});

    } catch (error) {
        console.log(error)
    }

}








module.exports = { create_cateogary, update_category,delete_category };
