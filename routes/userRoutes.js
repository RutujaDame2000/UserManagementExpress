const express = require("express")
const router = express.Router();
const jwt = require("jsonwebtoken")
const User = require("../model/user")
const dotenv = require('dotenv');
const verify_token = require("../middleware/verification")


const { register, login, profile, transiction, wishlist } = require("../controllers/userController")



router.post('/register/', register);
router.get('/login/', login);
router.get('/profile/', verify_token, profile);
router.get('/transiction/', verify_token, transiction);
router.get('/wishlist/', verify_token, wishlist);

module.exports = router;


