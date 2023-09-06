const express = require("express");
const router = express.Router();
const { electronicValidation } = require("../../validation");
const { electronicController } = require("../../controllers");
const validate = require("../../middlewares/validate");

// Create electronic

router.post(
    "/create-electronic",
    validate(electronicValidation.createElectronic),
    electronicController.createElectronic
);

// List electronic
router.get(
    "/list-electronic",
    validate(electronicValidation.listElectronic),
    electronicController.listElectronic
);

// Delete electronic
router.delete(
    "/delete-electronic/:Id",
    electronicController.deleteElectronic
);

// Update electronic
router.put(
    "/update-electronic/:id",
    electronicController.updateElectronic
);

module.exports = router;