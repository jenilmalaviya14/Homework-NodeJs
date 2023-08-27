const express = require("express");
// const tokenRoutes = require("./token.route");
const userRoute = require("./user.route");
const userCategory = require("./category.route");

const router = express.Router();

// router.use("/token", tokenRoutes);
router.use("/user", userRoute);
router.use("/category", userCategory);

module.exports = router;