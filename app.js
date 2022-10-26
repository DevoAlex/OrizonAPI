const express = require("express");
const { connect, disconnect } = require("./database");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

//Import routes
const userRoute = require("./routes/userRoutes");
const productRoute = require("./routes/productRoutes");
const orderRoute = require("./routes/orderRoutes");

//Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use("/users", userRoute);
app.use("/products", productRoute);
app.use("/orders", orderRoute);

//Basic routes
app.get("/", (req, res) => {
  res.send("we're on home");
});
app.get("*", (req, res) => {
  res.send("error page");
});

connect();

app.listen(3000, () => {
  console.log("Server is live");
});
