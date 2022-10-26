const { request } = require("express");
const express = require("express");
const router = express.Router();
const User = require("../models/user");
const {
  userList,
  getSingleUser,
  postUser,
  updateUser,
  deleteUser
} = require('../controllers/userControllers')

//Get back all users
router.get("/", userList);

//Gets back a specific user
router.get("/:userId", getSingleUser);

//Posts a new user
router.post("/", postUser);

//Updates a user
router.patch("/:userId", updateUser);

//Deletes a specific user
router.delete("/:userId", deleteUser);

module.exports = router;
