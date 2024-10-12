const User = require("../models/userModel");

const verifyAdmin = async (req,res,next)=>{
    try {
        const id = req.params.id;
        
        const user = await User.findById(id);
        if(!user){
            return res.status(400).json({message:"user not found"});
        }
        if(user.role !== "admin"){
            return res.status(400).json({message:"user must be an admin to access route"});
        }

        next();

    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

module.exports = verifyAdmin;