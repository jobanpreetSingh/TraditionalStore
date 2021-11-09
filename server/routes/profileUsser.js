const express = require('express');
const router = express.Router();
const Authenticate = require('../src/middleware/Authenticate')

router.get('/', Authenticate, (req, res) => {
    res.send(req.rootUser)
})
module.exports = router;