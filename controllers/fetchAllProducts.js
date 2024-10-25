const Product = require('../models/productModel');

const fetchAllProductsController =async (req,res)=>{
    try {
        const documents = await Product.find({}) //fetches all documents
        res.status(200).json(documents);
        
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

module.exports = fetchAllProductsController;