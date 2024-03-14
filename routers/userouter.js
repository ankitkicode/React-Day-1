const express = require('express')
const router = express.Router()
// Require controller modules.

router.get('/', (req, res) => {
    // If no token, send to login page
    res.status(200).json({ message: 'Welcome to the API' })
});

module.exports = router;