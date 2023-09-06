const express = require("express");
const router = express.Router();
const { hpValidation } = require("../../validation");
const { hpController } = require("../../controllers");
const validate = require("../../middlewares/validate");

// Create hp

router.post(
    "/create-hp",
    validate(hpValidation.createHp),
    hpController.createHp
);

// List hp
router.get(
    "/list-hp",
    validate(hpValidation.listHp),
    hpController.listHp
);

// Delete hp
router.delete(
    "/delete-hp/:Id",
    hpController.deleteHp
);

// Update hp
router.put(
    "/update-hp/:id",
    hpController.updateHp
);

module.exports = router;