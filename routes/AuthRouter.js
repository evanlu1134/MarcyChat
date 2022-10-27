const express = require("express");
const authController = require("../Controllers/AuthController");
const router = express.Router();

router.post("/", authController.validateRegistration);

router.post("/", authController.validateLogin);

router.post("/", authController.authenticate);

router.get("/", authController.check);
// router.post('/', AuthController.logOut);

module.exports = router;