const express = require('express')
const router = express.Router()
const {createUser,homeRoute} = require('../controller/controllers')
// Require controller modules.


router.get('/', homeRoute);

router.post('/create',createUser);

router.get('/demo', (req, res) => {
    // If no token, send to login page
    res.send("Welcome to API")
});



module.exports = router;