const express = require("express");
const { authCheck, validateLogin } = require("../controllers/authController");
const authController = require("../controllers/authController");
const router = express.Router();

// router.get("/login", authController.authCheck);

router.post("/login", authController.validateLogin);

router.get("/login", authController.validateLogin);

//  authController.validateLogin

router.post("/register", authController.validateRegistration);

router.post("/authenticate", authController.authenticate);

router.post('/logout', authController.logOut);

module.exports = router;