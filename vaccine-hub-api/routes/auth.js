const express = require('express')
const router = express.Router()
const User = require("../models/user")

router.post("/login", async (req, res, next) => {
    try {
        // take the user email and pw and attempt to authenticate
    } catch(err) {
        next(err)
    }
}) 

router.post("/register", async (req, res, next) => {
    try {
        // take the user email, pw, rsvp status, and number of guests 
        // and create a new user in the database
    } catch(err) {
        next(err)
    }
})

module.exports = router
