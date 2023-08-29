    const express = require("express");
const mobile = require("./mobile.route");

const router = express.Router();
router.use("/mobile", mobile);

module.exports = router;