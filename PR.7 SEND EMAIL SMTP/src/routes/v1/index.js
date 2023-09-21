const user = require("./user.route");
const token =require("./token.route");
const express =require("express");

const router = express.Router();
router.use("/user", user);
router.use('/token', token);

module.exports = router;