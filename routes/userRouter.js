
const express = require("express");
const app = express()
const UserController = require("../controllers/userControllers.js");

const router = express.Router();

router.get("/", UserController.getAllUsers);

router.get("/all", UserController.getAllUsersInfo);

router.get("/:id", UserController.getSingleUser);


router.post("/register",UserController.createUser)



module.exports = router;