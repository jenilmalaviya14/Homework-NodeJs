const express = require("express");
const router = express.Router();
const { legionValidation } = require("../../validation");
const { leginoController } = require("../../controllers");
const validate = require("../../middlewares/validate");

// Create legino

router.post(
    "/create-legino",
    validate(legionValidation.createLegino),
    leginoController.createLegino
);

// List legino
router.get(
    "/list-legino",
    validate(legionValidation.listLegino),
    leginoController.listLegino
);

// Delete legino
router.delete(
    "/delete-legino/:Id",
    leginoController.deleteLegino
);

// Update legino
router.put(
    "/update-legino/:id",
    leginoController.updatLegino
);

module.exports = router;