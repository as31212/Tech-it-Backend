const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true, //converts to lowercase
  },
  password: {
    type: String,
    required: true,
    minlength: 6, //determines minimum accepted length of password
  },
  cart: {
    type: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId, // Reference to product ID
          ref: "Product", // Reference to Product model
          required: true,
        },
        quantity: {
          type: Number,
          default: 1, // Default quantity if not specified
          min: 1, // Ensures at least 1 item in the cart
        },
        addedAt: {
          type: Date,
          default: Date.now, // Timestamp when the item is added to the cart
        },
      },
    ],
    default: [], // Ensures cart is an array
  },
  wishlist: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId, // Reference to product ID
        ref: "Product", // Reference to Product model
      },
    ],
    default: [], // Ensures wishlist is an array
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
