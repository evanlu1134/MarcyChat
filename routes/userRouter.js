
const express = require("express");
const app = express()
const UserController = require("../Controllers/userControllers.js");

const router = express.Router();

router.get("/", UserController.getAllUsers);

router.get("/all", UserController.getAllUsersInfo);

router.get("/:id", UserController.getSingleUser);

router.post("/",UserController.createUser)



module.exports = router;