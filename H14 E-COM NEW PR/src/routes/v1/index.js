const express = require("express");
const cart = require("./cart.route");
const electronic = require("./electronics.route");
const hp = require("./hp.route");
const laptop = require("./laptop.route");
const legion = require("./legion.route");
const order = require("./order.route");
const user = require("./user.route");

const router = express.Router();
router.use("/cart", cart);
router.use("/electronic", electronic);
router.use("/hp", hp);
router.use("/laptop", laptop);
router.use("/legion", legion);
router.use("/order", order);
router.use("/user", user);

module.exports = router;