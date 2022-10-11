const mongoose = require('mongoose')


const Admin = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String,
        unique: true,
        required: true
    },
    auth: {
        type: Boolean,
        required: true
    }
})


module.exports = mongoose.model('Admin', Admin)