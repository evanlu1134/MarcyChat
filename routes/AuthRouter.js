const express = require("express");
const authController = require("../Controllers/AuthController");
const router = express.Router();


router.get("/login", authController.validateLogin);

router.post("/login", authController.validateLogin);

router.post("/register", authController.validateRegistration);

router.post("/authenticate", authController.authenticate);

router.post('/logout', authController.logOut);

module.exports = router;