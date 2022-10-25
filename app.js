const mongoose = require("mongoose")
const user = require("./models/user")
const express = require("express")
const app = express()


const insertUser = async(obj) => {
    const addedUser = new user(obj)
    console.log(addedUser)
}

insertUser({
    name: "Alex",
    surname: "Peluso",
    email: "alex.peluso8@gmail.com"
})

module.exports = app