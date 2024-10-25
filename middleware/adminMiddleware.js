const User = require("../models/userModel");

const verifyAdmin = async (req, res, next) => {
  try {
    // Assume that `req.user` is populated by a previous authentication middleware after verifying the JWT.
    const userId = req.user.id; // Get the ID from the authenticated user

    // Find the user in the database
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" }); // Use 404 for not found
    }

    // Check if the user has the admin role
    if (!user.role || user.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admins only." }); // Use 403 for access denied
    }

    // Attach user to req for downstream processing
    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = verifyAdmin;
