const express = require("express")
const {connect, disconnect} = require("./database")
const mongoose = require('mongoose')
const userRoute = require('./routes/userRoutes')
const productRoute = require('./routes/productRoutes')
const orderRoute = require('./routes/orderRoutes')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use('/users', userRoute)
app.use('/products', productRoute)
app.use('/orders', orderRoute)

app.get('/', (req,res) => {
    res.send("we're on home")
})

connect()

app.listen(3000, () => {
    console.log('Server is live')
})