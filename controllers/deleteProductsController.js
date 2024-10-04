const Products = require("../models/productModel");

const deleteProductController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: "name is required" });
    }
    const productToDelete = await Products.findOne({ name });
    if (!productToDelete) {
      return res.status(400).json({ message: "name not found in database" });
    }
    await productToDelete.deleteOne();
    res.status(202).json({ message: `${name} has been successfully deleted` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = deleteProductController;