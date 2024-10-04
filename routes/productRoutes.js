const express =  require('express');
const router = express.Router();
const addProductController = require('../controllers/addProductsController');

router.post('/add',addProductController);
 //todo add controller

module.exports = router;