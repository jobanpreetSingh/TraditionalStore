const mongoose = require('mongoose')
const express = - require('express')

const DB = process.env.DATABASE
const DBConnection = async () => {
    try {
        const res = await mongoose.connect(DB)
        if (!res) {
            throw new Error('no connection')
        }
        else {
            console.log('connection successfully')
        }

    }
    catch (error) {
        console.log('no connection----->', error)
    }

}

module.exports = DBConnection;

