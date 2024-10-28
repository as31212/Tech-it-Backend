const Product = require("../models/productModel");
const mongoose = require("mongoose");

const fetchLocalCartController = async (req, res) => {
  try {
    const { cart } = req.body;

    // Check if `cart` is an array and contains valid ObjectIds
    if (!Array.isArray(cart) || cart.length === 0) {
      return res.status(400).json({ message: "Cart must be a non-empty array of product IDs." });
    }

    // Validate that each item in `cart` is a valid MongoDB ObjectId
    const validCartIds = cart.filter((id) => mongoose.Types.ObjectId.isValid(id));

    // Fetch product details for the valid IDs
    const products = await Product.find({ _id: { $in: validCartIds } });

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = fetchLocalCartController;
