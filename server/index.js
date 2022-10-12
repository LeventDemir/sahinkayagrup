const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const admin = require('./routes/admin')
const reference = require('./routes/reference')


mongoose.connect('mongodb+srv://sahinkaya-grup:sahinkaya-grup@cluster0.tysekxx.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


app.use(bodyParser.json())
app.use('/admin', admin)
app.use('/reference', reference)


module.exports = app