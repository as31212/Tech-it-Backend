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
    },
    categories:{
        type:[

        ]
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
    updatedAt:{
        type: Date,
        default: DataTransfer.now
    }
});

const Products = mongoose.model('Products',productSchema);

module.exports = Products;