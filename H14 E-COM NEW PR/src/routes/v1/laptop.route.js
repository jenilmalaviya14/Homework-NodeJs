const express = require("express");
const router = express.Router();
const { laptopValidation } = require("../../validation");
const { laptopController } = require("../../controllers");
const validate = require("../../middlewares/validate");

// Create laptop

router.post(
    "/create-laptop",
    validate(laptopValidation.createLaptop),
    laptopController.createLaptop
);

// List laptop
router.get(
    "/list-laptop",
    validate(laptopValidation.listLaptop),
    laptopController.listLaptop
);

// Delete laptop
router.delete(
    "/delete-laptop/:Id",
    laptopController.deleteLaptop
);

// Update laptop
router.put(
    "/update-laptop/:id",
    laptopController.updateLaptop
);

module.exports = router;