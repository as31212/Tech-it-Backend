const Category = require("../models/categoryModel");

const addCategoryController = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "name required" });
    }
    const nameExits = await Category.findOne({ name });
    if (nameExits) {
      return res.status(400).json({ message: "name exists" });
    }
    const category = await new Category({
      name,
    });

    await category.save();
    res.status(201).json({ message: "New category successfully created" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = addCategoryController;
