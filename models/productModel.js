const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    price:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
        default: ''
    },
    categories:{
        type:[String]
    },
    mainImage:{
        type:String,
        required:true
    },
    images:[
        {
            type:String
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    },
   updatedAt: {
    type: Date,
    default: Date.now,
}
});
const Product = mongoose.model('Product',productSchema);

// pagination function
Product.fetchPaginatedAndFilteredProducts = async (page,limit,filter,sort)=>{
    const skip = (page - 1 ) * limit; //this calculates the amount of documents to skip
    const products = await Product.find(filter).sort(sort).skip(skip).limit(limit); //the query sent to mongoDB 

    const totalProducts = await Product.countDocuments(filter); // used to later determine the amount of pages

    return {products,totalProducts};
}



module.exports = Product;