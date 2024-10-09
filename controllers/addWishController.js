const User = require('../models/userModel');

const addProductToWishlist  = async (req,res) =>{
    try {
        const productId = req.body.productId;
        if(!productId){
            return res.status(400).json({message:"productId required"});
        }
        const id = req.params.id;

        const user = await User.findById(id);
        if(!user){
           return res.status(400).json({message:'user with given id not found'});
        }
        user.wishlist.push(productId);
        await user.save();

        res.status(200).json({message:"product added to user wishlist"});
        
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

module.exports = addProductToWishlist;