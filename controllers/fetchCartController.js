const User = require("../models/userModel");
const mongoose = require("mongoose");

const fetchCartController = async (req,res)=>{
    try {
        const id = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(id)) { //determines if id is a valid mongoDB id
            return res.status(400).json({ message: "Invalid user ID" });
          }

        const user = await User.findById(id);
        if(!user){
            return res.status(400).json({message:"user not found"});
        }
        
        await user.populate({
            path: 'cart.productId',  // Populate the productId field inside the cart array
            model: 'Product',        // Reference the Product model
          });

        res.status(200).json({message:"cart successfully populated",
            userCart: user.cart
        });

    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

module.exports = fetchCartController;