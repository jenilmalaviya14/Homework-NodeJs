const express = require("express");
const car = require("./car.route");

const router = express.Router();
router.use("/car", car);

module.exports = router;