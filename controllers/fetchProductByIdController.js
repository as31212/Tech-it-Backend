const mongoose = require("mongoose");
const Product = require("../models/productModel");

const fetchProductByIdController = async (req, res) => {
  try {
    const { id } = req.params;

    // Verify if 'id' is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid product ID format" });
    }

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      _id: product._id,
      name: product.name,
      price: product.price,
      categories: product.categories,
      mainImage: product.mainImage,
      images: product.images,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = fetchProductByIdController;
