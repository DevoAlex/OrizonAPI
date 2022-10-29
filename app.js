const express = require("express");
const { connect, disconnect } = require("./database");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { default: helmet } = require("helmet");
const { default: mongoose } = require("mongoose");

//Import routes
const userRoute = require("./routes/userRoutes");
const productRoute = require("./routes/productRoutes");
const orderRoute = require("./routes/orderRoutes");

//Middlewares
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use("/users", userRoute);
app.use("/products", productRoute);
app.use("/orders", orderRoute);

//sanitize filter
mongoose.set("sanitizeFilter", true);

//Basic routes
app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "Welcome to orizon API" });
});
app.get("*", (req, res) => {
  res.status(404).json({ success: false, message: "404 not found" });
});

connect();

app.listen(3000, () => {
  console.log("Server is live");
});
