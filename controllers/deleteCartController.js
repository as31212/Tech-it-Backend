const User = require("../models/userModel");
const mongoose = require("mongoose");

const deleteCartController = async (req, res) => {
  try {
    const id = req.params.id;
    const productId = req.body.productId;

    if (!mongoose.Types.ObjectId.isValid(id)) { //determines if id is a valid mongoDB id
      return res.status(400).json({ message: "Invalid user ID" });
    }


    const user = await User.findById(id);
    if (!user) {
      return res.status(400).json({ message: "user not found" });
    }
    const itemToDeleteIndex = user.cart.findIndex(
      (el) => el.productId.toString() === productId
    );
    if (itemToDeleteIndex === -1) {
      return res.status(400).json({ message: "item not found in cart" });
    }
    user.cart.splice(itemToDeleteIndex, 1);
    await user.save();
    res.status(200).json({ message: "item removed from cart successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = deleteCartController;