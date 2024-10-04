const express =  require('express');
const router = express.Router();
const addProductController = require('../controllers/addProductsController');
const deleteProductController = require('../controllers/deleteProductsController');
const editProductController = require('../controllers/editProductController');

router.post('/add',addProductController);
router.delete('/delete',deleteProductController);
router.patch('/edit',editProductController);

module.exports = router;