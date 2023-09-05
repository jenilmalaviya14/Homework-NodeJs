const express = require("express");
const router = express.Router();
const { useraddressValidation } = require("../../validation");
const { useraddressController } = require("../../controllers");
const validate = require("../../middlewares/validate");

// Create useradd

router.post(
    "/create-useradd",
    validate(useraddressValidation.createUserAdd),
    useraddressController.createUserAdd
);

// List useradd
router.get(
    "/list-useradd",
    validate(useraddressValidation.listUserAdd),
    useraddressController.listUserAdd
);

// Delete useradd
router.delete(
    "/delete-useradd/:Id",
    useraddressController.deleteUserAdd
);

// Update useradd
router.put(
    "/update-useradd/:id",
    useraddressController.updateUserAdd
);

module.exports = router;