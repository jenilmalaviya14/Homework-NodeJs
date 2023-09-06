const express = require("express");
const mobile = require("./mobile.route");
const category = require("./category.route");
const cart = require("./cart.route");
const order = require("./order.route");
const payment = require("./payment.route");
const product = require("./product.route");
const user_address = require("./user_address.route");
const user = require("./user.route");
const discount = require("./discount.route");
const token =require("./token.route")

const router = express.Router();
router.use("/mobile", mobile);
router.use("/category", category);
router.use("/cart", cart);
router.use("/order", order);
router.use("/payment", payment);
router.use("/product", product);
router.use("/user_address", user_address);
router.use("/user", user);
router.use("/discount", discount);
router.use('/token', token);

module.exports = router;