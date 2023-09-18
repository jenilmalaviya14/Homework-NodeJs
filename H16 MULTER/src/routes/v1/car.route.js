const express = require("express");
const router = express.Router();
const { carValidation } = require("../../validation");
const { carController } = require("../../controllers");
const { upload } = require("../../middlewares/upload");
const validate = require("../../middlewares/validate");

// Create car

router.post(
    "/create-car",
    upload.single("image"),
    validate(carValidation.createCar),
    carController.createCar
);

// List car
router.get(
    "/list-car",
    validate(carValidation.listCar),
    carController.listCar
);

// Delete car
router.delete(
    "/delete-car/:Id",
    carController.deleteCar
);

// Update car
router.put(
    "/update-car/:id",
    carController.updateCar
);

module.exports = router;