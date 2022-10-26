const express = require("express");
const router = express.Router();
const user = require("../models/user");

router.get("/", (req, res) => {
  res.send("We're on posts");
});

router.post("/", (req, res) => {
    console.log(req.body);
});
// router.put('/:id', (req, res) => {

// })
// router.delete('/:id', (req, res) => {

// })

module.exports = router;
