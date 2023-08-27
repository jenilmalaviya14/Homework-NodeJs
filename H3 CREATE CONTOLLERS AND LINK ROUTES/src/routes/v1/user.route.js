const express = require("express");
const userValidation  = require("../../validation/user.validation");
const userController  = require("../../controllers/user.controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create user */
router.get(
  "/list",
  validate(userValidation.getUserlist),
  userController.getUserlist
);

/** Get user list */
// router.get(
//   "/list",
//   // validate(userValidation.getUserList),
//   userController.getUserList
// );
module.exports = router;