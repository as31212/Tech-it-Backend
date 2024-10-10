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
   updatedAt: {
    type: Date,
    default: Date.now,
}
});

const Product = mongoose.model('Product',productSchema);

module.exports = Product;