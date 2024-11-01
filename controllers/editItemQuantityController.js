const User = require("../models/userModel");

const editItemQuantityController = async (req, res) => {
  try {
    const { id } = req.params;
    const { productId, quantity } = req.body;

    // Validate inputs
    if (!productId || typeof quantity !== 'number' || quantity < 1) {
      return res.status(400).json({ message: "Invalid product ID or quantity" });
    }

    // Find the user by ID
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Find the item in the user's cart
    const itemToEdit = user.cart.find((el) => el.productId.toString() === productId);
    if (!itemToEdit) {
      return res.status(404).json({ message: "Product not found in cart" });
    }

    // Update the quantity
    itemToEdit.quantity = quantity;

    // Save the updated user document
    await user.save();
    return res.status(200).json({ message: "Item quantity updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = editItemQuantityController;
