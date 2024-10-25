const Products = require("../models/productModel");

const addProductController = async (req, res) => {
  try {
    const { name, price, description, categories, mainImage, images } =
      req.body;

    if (!name || !price || !mainImage) {
      return res
        .status(400)
        .json({ message: "name, price, and mainImage are required" });
    }

    const nameIsNotUnique = await Products.findOne({ name });

    if (nameIsNotUnique) {
      return res.status(400).json({ message: "product name is in use" });
    }

    const newProduct = new Products({
      name,
      price,
      description,
      categories,
      mainImage,
      images,
    });

    await newProduct.save();
    res.status(201).json({
      message: `${name} added successfully`,
      product: {
        id: newProduct._id,
        name: newProduct.name,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = addProductController;


