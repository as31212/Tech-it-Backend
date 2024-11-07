const Category = require("../models/categoryModel");

const fetchCategoriesController = async (req,res)=>{
    try {
        const categories = await Category.find({}); // will return all documents
        res.status(200).json({categories});
        
    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = fetchCategoriesController;