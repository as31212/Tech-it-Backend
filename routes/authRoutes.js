const express = require('express');
const router = express.Router();
const registrationController = require('../controllers/registerController');
const loginController = require('../controllers/loginController');


router.get('/test',(req,res)=>{
    res.status(200).send('this is a test');
})

router.post('/register',registrationController);
router.post('/login',loginController); 

module.exports = router;