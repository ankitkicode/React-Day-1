const express = require('express')
const router = express.Router()
const {createUser,homeRoute} = require('../controller/controllers')
// Require controller modules.


router.get('/', homeRoute);

router.post('/create',createUser);




router.post('/demo', (req, res) => {
    // If no token, send to login page
    res.status(201).json({success:true,user:req.body })
});



module.exports = router;