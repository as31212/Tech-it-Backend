const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const registrationController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "email and password required" });
    }
    const existingUser = await User.findOne({ email }); // you should use findOne because it returns the document if found and null if not found which is perfect for conditional checks
    if (existingUser) {
      return res.status(400).json({ message: "email is already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
      message: "user account created",
      user: {
        id: newUser._id,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = registrationController;
