const express = require('express')

const router  = express.Router()

//Controller Functions
const { signupUser, loginUser } = require('../controllers/userController')  

//Login Route
router.post('/login', loginUser)

//Signup Route
router.post('/signup', signupUser)

module.exports = router