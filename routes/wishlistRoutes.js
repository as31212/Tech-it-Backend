const express = require("express");
const router = express.Router();
const jwtMiddleWare = require("../middleware/jwtAuth");
const addProductToWishlist = require("../controllers/addWishController");
const deleteProductFromWishlist = require("../controllers/deleteWishController");
const fetchWishlistController = require("../controllers/fetchWishController");

router.patch('/add/:id',addProductToWishlist); //todo include jwt middleware after testing 
router.delete('/delete/:id', deleteProductFromWishlist); //todo include jwt middleware after testing 
router.get('/fetch/:id',jwtMiddleWare,fetchWishlistController); //todo include jwt middleware after testing


module.exports = router;
