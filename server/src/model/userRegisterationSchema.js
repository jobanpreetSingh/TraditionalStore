const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const userRegisterationSchema = new mongoose.Schema({

    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    phoneNumber: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    cpassword: {
        type: String,
        require: true
    },
    tokens: [
        {
            token: {
                type: String,
                require: true
            }
        }
    ]
});

// hashing password bycript using pre save

userRegisterationSchema.pre('save', async function (next) {

    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12)
        this.cpassword = await bcrypt.hash(this.cpassword, 12)

    }
    next();
});

// generate auth token 

userRegisterationSchema.methods.generateAuthToken = async function () {

    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({ token: token })
        await this.save();
        return token;
    }

    catch (error) {
        console.log(error)
    }
}

const UserRegistration = mongoose.model('USERREGISTRATION', userRegisterationSchema)

module.exports = UserRegistration;

