const Product = require('../models/productModel');

const fetchAllProductsController = async (req, res) => {
    try {
        const { categories, sort, price } = req.query;

        // Initialize filter object
        const filter = {};
        if (categories) {
            // Ensure categories is an array, even if a single category is passed
            const categoryArray = Array.isArray(categories) ? categories : categories.split(',');
            // Filter products where 'category' is in the provided categories array
            filter.categories = { $in: categoryArray };
        }

        if (price) {
            // Filter products where 'price' is less than or equal to the provided price
            filter.price = { $lte: Number(price) };
        }

        // Initialize sort object
        let sortOption = {};
        if (sort) {
            // Sort can be "price" or "-price" for ascending/descending
            const sortField = sort.replace('-', '');
            const sortOrder = sort.startsWith('-') ? -1 : 1;
            sortOption[sortField] = sortOrder;
        }

        // Fetch filtered and sorted documents
        const documents = await Product.find(filter).sort(sortOption);
        res.status(200).json(documents);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = fetchAllProductsController;
