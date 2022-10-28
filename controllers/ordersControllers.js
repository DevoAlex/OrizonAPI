const Order = require("../models/order");
const User = require("../models/user");
const Product = require("../models/product");
const endOfDay = require('date-fns/endOfDay')
const startOfDay = require('date-fns/startOfDay')

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("product").populate("user");
    res.status(200).json({ success: true, data: orders });
  } catch (err) {
    res.status(400).json({ success: false, message: err });
  }
};

const getSingleOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId)
      .populate("product")
      .populate("user");
      console.log(order.date)
    if (!order) {
      return res
        .status(404)
        .json({ error: `No order with id ${req.params.orderId}` });
    }
    res.status(200).json({ success: true, data: order });
  } catch (err) {
    res.status(400).json({ success: false, message: err });
  }
};

const getOrderByDate = async(req, res) => {
  try{
   const paramDate = new Date(req.params.orderDate)
   
   const filterDate = await Order.find({createdOn : {$gt: startOfDay(paramDate), $lt: endOfDay(paramDate)}})
   if (!filterDate) {
    return res
      .status(404)
      .json({ error: `No order with date ${req.params.orderDate}` });
  }
  res.status(200).json({ success: true, data: filterDate });
  } catch (err) {
    res.status(400).json({ success: false, message: err });
  }
}

const postOrder = async (req, res) => {
  try {
    const productFound = await Product.find({ _id: req.body.product });
    const userFound = await User.findById(req.body.user);
    if (!userFound) {
      return res.status(404).json({ message: "User not found." });
    } else {
      const item = [];
      const order = new Order({
        product: item,
        user: req.body.user,
        createdOn: new Date()
      });
      
      for (let i = 0; i < productFound.length; i++) {
        item.push(productFound[i]._id);
      }
      order.$set({ product: item }).save();
      res.status(201).json({ success: true, data: order });
    }
  } catch (err) {
    res.status(400).json({ success: false, message: err });
  }
};

const updateOrder = async (req, res) => {
  try {
    const productFound = await Product.find({ _id: req.body.product });
    const item = [];
    for (let i = 0; i < productFound.length; i++) {
      item.push(productFound[i]._id);
    }
    const updatedOrder = await Order.updateOne(
      { _id: req.params.orderId },
      {
        $set: {
          product: item,
        },
      },
      { upsert: true }
    );
    res.status(200).json({
      success: true,
      message: `Order with id ${req.params.orderId} updated`,
      data: updatedOrder,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const removedOrder = await Order.deleteOne({ _id: req.params.orderId });
    res.status(200).json({
      success: true,
      message: `Item with id ${req.params.orderId} deleted`,
      data: removedOrder,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err });
  }
};

module.exports = {
  getOrders,
  getSingleOrder,
  getOrderByDate,
  postOrder,
  updateOrder,
  deleteOrder,
};