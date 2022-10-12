const express = require('express')
const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const Admin = require('../models/admin')

const router = express.Router()


router.post('/sign-up', (req, res) => {
    const admin = req.body
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(admin.password, salt);
    const _id = mongoose.Types.ObjectId()

    admin._id = _id
    admin.password = hash
    admin.auth = true
    admin.token = jwt.sign({ user: _id }, 'SeCrEtKeY');

    new Admin(admin).save(err => {
        if (!err) res.json({ token: admin.token })

        else if (err.code == 11000) res.json({ exist: true })

        else res.json({ success: false })
    })
})


router.post('/sign-in', (req, res) => {
    const data = req.body

    Admin.findOne({ username: data.username }, (err, admin) => {
        if (admin) {
            const checkPassword = bcrypt.compareSync(data.password, admin.password)

            if (checkPassword) {
                if (admin.auth) res.json({ token: admin.token })

                else {
                    admin.auth = true
                    admin.token = jwt.sign({ user: admin._id }, 'SeCrEtKeY');

                    admin.save(err => {
                        if (!err) res.json({ token: admin.token })

                        else res.json({ success: false })
                    })
                }
            } else res.json({ success: false })
        } else res.json({ success: false })
    })
})


router.post('/sign-out', (req, res) => {
    Admin.findOne({ token: req.body.token }, (err, admin) => {
        if (admin) {
            admin.auth = false

            admin.save(err => {
                if (!err) res.json({ success: true })

                else res.json({ success: false })
            })
        } else res.json({ success: false })
    })
})


router.get('/auth', (req, res) => {
    Admin.findOne({ token: req.query.token }, (err, admin) => {
        if (admin) res.json({ auth: admin.auth })

        else res.json({ success: false })
    })
})


module.exports = router