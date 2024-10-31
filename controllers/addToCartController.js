const User = require("../models/userModel");

const addToCartController = async (req, res) => {
  try {
    const id = req.params.id;
    const { productId, quantity } = req.body;

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const productInCart = user.cart.find((el) => el.productId.toString() === productId);

    if (productInCart) {
      productInCart.quantity += quantity || 1;
    } else {
      user.cart.push({
        productId,
        quantity: quantity || 1,
      });
    }

    await user.save();
    res.status(201).json({ message: "Item added to cart successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = addToCartController;
