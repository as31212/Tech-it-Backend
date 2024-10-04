const Products = require("../models/productModel");

const deleteProductController = async (req, res) => {
  try {
    const { id } = req.body;
    if (!id) {
      return res.status(400).json({ message: "id is required" });
    }
    const productToDelete = await Products.findById(id);
    if (!productToDelete) {
      return res.status(400).json({ message: "id not found in database" });
    }
    await productToDelete.deleteOne();
    res.status(202).json({ message: `${productToDelete.name} has been successfully deleted` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = deleteProductController;