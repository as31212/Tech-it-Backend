const express = require('express');
const router = express.Router();
const registrationController = require('../controllers/registerController');

router.get('/test',(req,res)=>{
    res.status(200).send('this is a test');
})

router.post('/register',registrationController);

module.exports = router;