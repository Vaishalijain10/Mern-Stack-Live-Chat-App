// inside this file, we will write all the routes related to our user

// importing express
const express = require("express");

// importing registerUser section from userController file from controllers folder
const { registerUser } = require("../controllers/userControllers");

// router is  used to create different routes
const router = express.Router();

// route for register page where registerUser is controller
router.route("/").post(registerUser);

// route for login page where authUser is controller
router.route('/login', authUser)

module.exports = router;
