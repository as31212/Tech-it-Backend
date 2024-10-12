const express = require("express");
const router = express.Router();
const jwtMiddleWare = require("../middleware/jwtAuth");
const addToCartController = require("../controllers/addToCartController");
const deleteCartController = require("../controllers/deleteCartController");
const fetchCartController = require("../controllers/fetchCartController");

router.post('/add/:id',jwtMiddleWare,addToCartController);
router.delete('/delete/:id',jwtMiddleWare,deleteCartController) 
router.get('/all/:id',jwtMiddleWare,fetchCartController) 
module.exports = router;