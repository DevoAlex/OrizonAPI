const mongoose = require("mongoose")
const userSchema = require("./user")
const productSchema = require("./product")

const orderSchema = new mongoose.Schema({
    products: {
        product: productSchema,
        required: true
    },
    users: {
        orderedBy: userSchema,
        required: true
    }
})

module.exports = mongoose.model("orders", orderSchema)