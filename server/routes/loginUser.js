var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userSchema = require('../src/model/userRegisterationSchema');
const { now } = require('mongoose');
/* GET home page. */
router.post('/', async (req, res, next) => {

  try {
    let token;
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).send({ error: 'please fill the data' })
    }

    const userLogin = await userSchema.findOne({ email: email })

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password)

      token = await userLogin.generateAuthToken();
      res.cookie('jwtoken', token.toString(),
        {
          expires: new Date(Date.now() + 25892000000), //25892000000 3 days
          httpOnly: true
        }
      )
      if (!isMatch) {
        res.status(400).send({ error: "credentials does not match" })
      }
      else {
        res.status(200).send({ message: "user login successfully " })
      }

    }

    else {
      res.status(400).send({ error: "credentials does not match" })
    }

  }

  catch (error) {
    console.log(error)
  }
});

module.exports = router;
