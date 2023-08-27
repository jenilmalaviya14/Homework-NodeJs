const express = require("express");
const userValidation  = require("../../validation/user.validation");
const userController  = require("../../controllers/user.controllers");
const validate = require("../../middlewares/validate");

const   router = express.Router();

/** create user */
router.post(
  "/create-user",
  validate(userValidation.createUser),
  userController.createUser
);

/** get user */
router.get(
  "/list-user",
  validate(userValidation.listUser),
  userController.getUserList
);

/** delete user */
router.delete(
  "/delete-user/:UserId",
  userController.deleteUserbyId
);

module.exports = router;