const express = require("express");
const authController = require("../Controllers/AuthController");
const router = express.Router();

router.post("/register", authController.validateRegistration);

router.post("/login", authController.validateLogin);

router.post("/authenticate", authController.authenticate);

// router.post('/logout', AuthController.logOut);

module.exports = router;