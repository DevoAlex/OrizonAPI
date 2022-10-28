const express = require("express");
const router = express.Router();

const {
  getOrders,
  getSingleOrder,
  getOrderByDate,
  postOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/ordersControllers");

//Get back all orders
router.get("/", getOrders);

//get back a single order
router.get("/:orderId", getSingleOrder);

router.get('/createdOn/:orderDate', getOrderByDate)

//Post a new order
router.post("/", postOrder);

//Update an order
router.patch("/:orderId", updateOrder);

//Delete an order
router.delete("/:orderId", deleteOrder);

module.exports = router;
