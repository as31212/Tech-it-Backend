const express =  require('express');
const router = express.Router();
const addProductController = require('../controllers/addProductsController');
const deleteProductController = require('../controllers/deleteProductsController');

router.post('/add',addProductController);
router.delete('/delete',deleteProductController);

module.exports = router;