const express = require("express");
const UserController = require("../Controllers/userControllers.js");

const router = express.Router();

router.get("/", UserController.getAllUsers);

router.get("/:id", UserController.getSingleUser);

router.post("/",UserController.createUser)

module.exports = router;