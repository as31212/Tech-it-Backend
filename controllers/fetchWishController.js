const User = require("../models/userModel");
const Products = require("../models/productModel");

const fetchWishlistController = async (req, res) => {
  try {
    const id = req.params.id;

    const user = await User.findById(id);
    if (!user) {
      return res.status(400).json({ message: "user not found" });
    }
   await user.populate("wishlist");
    res
      .status(200)
      .json({
        message: "successfully populated wishlist",
        wishlist: user.wishlist,
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = fetchWishlistController; 