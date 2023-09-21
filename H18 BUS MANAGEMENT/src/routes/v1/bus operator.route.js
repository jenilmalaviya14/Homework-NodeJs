const express = require("express");
const router = express.Router();
const { busoperatorValidation } = require("../../validation");
const { busoperatorController } = require("../../controllers");
const validate = require("../../middlewares/validate");

// Create busoperator

router.post(
    "/create-busoperator",
    validate(busoperatorValidation.createBusoperator),
    busoperatorController.createBusoperator
);

// List busoperator
router.get(
    "/list-busoperator",
    validate(busoperatorValidation.listBusoperator),
    busoperatorController.listBusoperator
);

// Delete busoperator
router.delete(
    "/delete-busoperator/:Id",
    busoperatorController.deleteBusoperator
);

// Update busoperator
router.put(
    "/update-busoperator/:id",
    busoperatorController.updateBusoperator
);

module.exports = router;