const express = require('express');
const router = express.Router();
const Authenticate = require('../src/middleware/Authenticate')

router.post('/', Authenticate, async (req, res) => {
    try {
        req.rootUser.tokens = req.rootUser.tokens.filter((token) => {
            return token.token != req.token
        })
        await req.rootUser.save()
        res.clearCookie('jwtoken', { path: "/" });
        res.status(200).send({ message: 'logout successfully' });


    }
    catch (e) {
        res.status(500).send(e)
    }


})
module.exports = router;



