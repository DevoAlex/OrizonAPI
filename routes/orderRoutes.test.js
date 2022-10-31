const supertest = require("supertest");
const Order = require("../models/order");
const app = require("../app");
const { connect, disconnect } = require("../database");
const request = supertest(app);

const dummyOrder = new Order({
  name: "testProduct",
  price: 100,
});

let testId = null;
