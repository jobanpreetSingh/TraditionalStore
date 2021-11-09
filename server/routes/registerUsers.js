var express = require('express');
var router = express.Router();
const DBConnection = require('../src/dbConnection');
const sendEmail = require('../src/middleware/emails');
DBConnection();
const UserRegistrationSchema = require('../src/model/userRegisterationSchema')
/* GET users listing. */
router.post('/', async (req, res) => {
  const { firstName, lastName, email, phoneNumber, password, cpassword } = req.body;

  if (!firstName || !lastName || !email || !phoneNumber || !password || !cpassword) {
    return res.status(422).send({ error: 'please fill all the required fields' })
  }
  else if (password != cpassword) {
    return res.status(422).send({ error: 'password does not match!!' })
  }
  else {

    try {
      const userExist = await UserRegistrationSchema.findOne({ email: email })
      if (userExist) {
        return res.status(422).send({ error: 'user already exist' })
      }

      const user = new UserRegistrationSchema({ firstName, lastName, email, phoneNumber, password, cpassword })

      await user.save()
      res.status(201).send({ message: "user created successfully" })
      sendEmail();

    } catch (error) {
      console.log(error)
    }
  }
});

module.exports = router;
