const express = require('express');
const router = express.Router();
const registrationController = require('../controllers/registerController');
const jwtMiddleware = require("../middleware/jwtAuth");
const loginController = require('../controllers/loginController');
const deleteUserController = require("../controllers/deleteUser");


router.get('/test',(req,res)=>{
    res.status(200).send('this is a test');
})

router.post('/register',registrationController);
router.post('/login',loginController); 
router.delete('/delete/:id',jwtMiddleware,deleteUserController);

module.exports = router;