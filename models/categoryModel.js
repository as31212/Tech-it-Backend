const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique:true,
        trim: true,  // Removes any extra whitespace
        minlength: 2, // Optional: sets a minimum length for the name
        maxlength: 50 // Optional: sets a maximum length for the name
    }
}, {
    timestamps: true // Adds createdAt and updatedAt timestamps
});

// Define model with specified collection name (optional)
const Category = mongoose.model('Category', categorySchema, 'categories');

module.exports = Category;
