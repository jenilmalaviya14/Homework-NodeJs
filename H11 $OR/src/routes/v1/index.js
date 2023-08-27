const express = require("express");
const category = require("./category.route");
const hotel = require("./hotel.route");
const bus = require("./bus.route");
const stationery = require("./stationery.route");
const school = require("./school.route");
const travel = require("./travel.route");
const pharmacy = require("./pharmacy.route");
const jewellery = require("./jewellery.route");
const movie = require("./movie.route");
const music = require("./music.route");
const grocery = require("./grocery.route");

const router = express.Router();

router.use("/category", category);
router.use("/hotel", hotel);
router.use("/bus", bus);
router.use("/stationery", stationery);
router.use("/school", school);
router.use("/travel", travel);
router.use("/pharmacy", pharmacy);
router.use("/jewellery", jewellery);
router.use("/movie", movie);
router.use("/music", music);
router.use("/grocery", grocery);

module.exports = router;