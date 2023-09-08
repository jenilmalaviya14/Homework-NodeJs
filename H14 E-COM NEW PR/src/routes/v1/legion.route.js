const express = require("express");
const router = express.Router();
const { legionValidation } = require("../../validation");
const { legionController } = require("../../controllers");
const { upload } = require("../../middlewares/upload");
const validate = require("../../middlewares/validate");

// Create legion

router.post(
    "/create-legion",
    upload.single("image"),
    validate(legionValidation.createLegion),
    legionController.createLegion
);

// List legion
router.get(
    "/list-legion",
    upload.single("image"),
    validate(legionValidation.listLegion),
    legionController.listLegion
);

// Delete legion
router.delete(
    "/delete-legion/:Id",
    legionController.deleteLegion
);

// Update legion
router.put(
    "/update-legion/:id",
    legionController.updateLegion
);

module.exports = router;