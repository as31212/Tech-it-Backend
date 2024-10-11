const express = require("express");
const router = express.Router();
const jwtMiddleWare = require("../middleware/jwtAuth");
const addToCartController = require("../controllers/addToCartController");

router.post('/add/:id',jwtMiddleWare,addToCartController);// todo complete controller

module.exports = router;