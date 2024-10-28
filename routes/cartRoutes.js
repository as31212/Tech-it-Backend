const express = require("express");
const router = express.Router();
const jwtMiddleWare = require("../middleware/jwtAuth");
const addToCartController = require("../controllers/addToCartController");
const deleteCartController = require("../controllers/deleteCartController");
const fetchCartController = require("../controllers/fetchCartController");
const fetchLocalCartController = require("../controllers/fetchLocalCartController");

router.post('/add/:id',jwtMiddleWare,addToCartController);
router.delete('/delete/:id',jwtMiddleWare,deleteCartController); 
router.get('/all/:id',jwtMiddleWare,fetchCartController); 
router.post('/localFetch',fetchLocalCartController);
module.exports = router;