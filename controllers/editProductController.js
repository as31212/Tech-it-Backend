const Products = require("../models/productModel");

const editProductController = async (req, res) => {
  try {
    const {
      id,
      name,
      price,
      description,
      categories,
      mainImage,
      images,
    } = req.body;

    if (!id) {
      return res.status(400).json({ message: "Product ID is required" });
    }

    const product = await Products.findById(id);
    if (!product) {
      return res.status(400).json({ message: "ID not found" });
    }

    // Update only the provided fields
    product.name = name || product.name;
    product.price = price || product.price;
    product.description = description || product.description;
    product.categories = categories || product.categories;
    product.mainImage = mainImage || product.mainImage;
    product.images = images || product.images;

    // Save the updated document
    await product.save();

    // Send the updated product as response
    res.status(201).json({ message: `Product info updated`, product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = editProductController;
