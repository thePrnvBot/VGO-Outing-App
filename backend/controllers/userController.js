const User = require('../models/userModel')

//User Login
const loginUser = async (req, res) => {
    res.json({msg:"Login User"})
}

//User Signup
const signupUser = async (req, res) => {
    res.json({msg:"Signup User"})
}

module.exports = { signupUser, loginUser }