const User = require("../models/userModel");

const addToCartController = async (req,res)=>{
    try {
        const id = req.params.id;
        const {productId,quantity} = req.body;

        const user = await User.findById(id);
        if(!user){
            return res.status(400).json({message:"User not found"})
        }
        const existingCartItem = user.cart.find(item => item.productId.toString() === productId);
        if (existingCartItem) {
            existingCartItem.quantity += quantity || 1; 
            res.json({message:"product is already present in cart"});
        } else {
            user.cart.push({
                productId,
                quantity: quantity || 1,
            });
        }

        await user.save();
        res.status(201).json({message:"Item added to cart successfully"})

    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
//! keep in mind that thi logic allows for the use case of the product already existing within the cart and adding to the quantity however it does not include a corresponding message 
module.exports = addToCartController;