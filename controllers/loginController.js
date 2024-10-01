const User = require("../models/userModel");
const bcrypt = require("bcrypt");
// todo use JWT for session handling

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "email and password required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "invalid username or password" });
    }
    const passIsMatch = await bcrypt.compare(password, user.password);
    if (!passIsMatch) {
      return res.status(400).json({ message: "invalid username or password" });
    }
    res.status(200).json({ message: "login successful", userData: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = loginController;


