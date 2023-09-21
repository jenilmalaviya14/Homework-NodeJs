const express = require("express");
const router = express.Router();
const { busrouteValidation } = require("../../validation");
const { busrouteController } = require("../../controllers");
const validate = require("../../middlewares/validate");

// Create busroute

router.post(
    "/create-busroute",
    validate(busrouteValidation.createBusroute),
    busrouteController.createBusroute
);

// List busroute
router.get(
    "/list-busroute",
    validate(busrouteValidation.listBusroute),
    busrouteController.listBusroute
);

// Delete busroute
router.delete(
    "/delete-busroute/:Id",
    busrouteController.deletebusroute
);

// Update busroute
router.put(
    "/update-busroute/:id",
    busrouteController.updatebusroute
);

module.exports = router;