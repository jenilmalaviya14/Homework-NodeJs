const express = require("express");
const router = express.Router();
const { userValidation } = require("../../validation");
const { userController } = require("../../controllers");
const validate = require("../../middlewares/validate");

// Create user

router.post(
    "/create-user",
    validate(userValidation.createUser),
    userController.createUser
);

// List user
router.get(
    "/list-user",
    validate(userValidation.listUser),
    userController.listUser
);

// Delete user
router.delete(
    "/delete-user/:Id",
    userController.deleteUser
);

// Update user
router.put(
    "/update-user/:id",
    userController.updateUser
);

module.exports = router;