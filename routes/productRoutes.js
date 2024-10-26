const express = require('express');
const router = express.Router();
const addProductController = require('../controllers/addProductsController');
const deleteProductController = require('../controllers/deleteProductsController');
const editProductController = require('../controllers/editProductController');
const adminMiddleware = require("../middleware/adminMiddleware");
const jwtMiddleWare = require("../middleware/jwtAuth");
const fetchAllProductsController = require('../controllers/fetchAllProducts');
const fetchProductByIdController = require('../controllers/fetchProductByIdController');


router.post('/add/:id', jwtMiddleWare, adminMiddleware, addProductController);
router.delete('/delete/:id', jwtMiddleWare, adminMiddleware, deleteProductController);
router.patch('/edit/:id', jwtMiddleWare, adminMiddleware, editProductController);
router.get('/all',fetchAllProductsController);
router.get("/get/:id",fetchProductByIdController);

module.exports = router;

