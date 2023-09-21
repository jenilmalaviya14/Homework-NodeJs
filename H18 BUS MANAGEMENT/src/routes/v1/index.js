const express = require("express");
const booking = require("./booking.route");
const busoperator = require("./bus operator.route");
const busroute = require("./bus route.route");
const bus = require("./bus.route");
const payment = require("./payment.route");
const user = require("./user.route");
const token =require("./token.route")

const router = express.Router();
router.use("/booking", booking);
router.use("/busoperator", busoperator);
router.use("/busroute", busroute);
router.use("/bus", bus);
router.use("/payment", payment);
router.use("/user", user);
router.use('/token', token);

module.exports = router;