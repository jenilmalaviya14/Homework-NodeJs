const express = require("express");
const router = express.Router();
const pharmacyValidation = require("../../validation/pharmacy.validation");
const Controller = require("../../controllers/pharmacy.controller");
const validate = require("../../middlewares/validate");


/** Crate Category list */
router.post(
  "/create-pharmacy",
  validate(pharmacyValidation.createPharmacy),
  Controller.createPharmacy
);

router.get(
  "/List-pharmacy",
  validate(pharmacyValidation.getPharmacy),
  Controller.getPharmacy
);

router.delete(
  "/delete-pharmacy/:Id",
  Controller.deletePharmacy
);

router.put(
  "/update-pharmacy/:Id",
  Controller.updatePharmacy
);

module.exports = router;