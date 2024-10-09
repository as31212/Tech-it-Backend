const User = require("../models/userModel");

const deleteProductFromWishlist = async (req, res) => {
  try {
    const productId = req.body.productId;
    const id = req.params.id;

    const user = await User.findById(id);
    if (!user) {
      return res.status(400).json({ message: "User with given ID not found" });
    }

    const productToDelete = user.wishlist.findIndex((el) => el.equals(productId)); // If productId is an ObjectId
    if (productToDelete === -1) {
      return res.status(400).json({ message: "Product not present within wishlist" });
    }

    user.wishlist.splice(productToDelete, 1); // Remove the product at the index
    await user.save(); // Save changes to the database

    res.status(200).json({ message: 'Product successfully deleted from wishlist' }); // 200 OK is common for deletion
  } catch (error) {
    res.status(500).json({ message: error.message }); // Catch and return any internal server errors
  }
};

module.exports = deleteProductFromWishlist;
