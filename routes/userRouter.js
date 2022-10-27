
const express = require("express");
const app = express()
const UserController = require("../Controllers/userControllers.js");

const router = express.Router();

router.get("/", UserController.getAllUsers);

router.get("/:id", UserController.getSingleUser);

router.post("/",UserController.createUser)



// router.get("/user/:id/friends", FriendController.getAllFriends);

// router.post("/user/:id/friends", FriendController.createFriendRequest);

// router.put("/user/:id/friends", FriendController.acceptFriendRequest);



// router.delete("/user/:id/friends", FriendController.deleteFriend);

module.exports = router;