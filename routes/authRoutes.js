const express = require('express');
const router = express.Router();

router.get('/test',(req,res)=>{
    res.status(200).send('this is a test');
})

router.post('/register',)

module.exports = router;