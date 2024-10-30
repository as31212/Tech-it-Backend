const express = require("express");
const router = express.Router();
const jwtMiddleWare = require("../middleware/jwtAuth");
const addToCartController = require("../controllers/addToCartController");
const deleteCartController = require("../controllers/deleteCartController");
const fetchCartController = require("../controllers/fetchCartController");
const fetchLocalCartController = require("../controllers/fetchLocalCartController");
const editItemQuantityController = require("../controllers/editItemQuantityController");

router.post('/add/:id',jwtMiddleWare,addToCartController);
router.delete('/delete/:id',jwtMiddleWare,deleteCartController); 
router.get('/all/:id',jwtMiddleWare,fetchCartController); 
router.post('/localFetch',fetchLocalCartController);
router.patch('/quantity:id',jwtMiddleWare,editItemQuantityController);
module.exports = router;