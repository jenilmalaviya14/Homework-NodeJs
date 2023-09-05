const express = require("express");
const router = express.Router();
const mobileValidation = require("../../validation/mobile.validation");
const Controller = require("../../controllers/mobile.controller");
const validate = require("../../middlewares/validate");


/** Crate Mobile.validation list */
router.post(
  "/create-mobile",
  validate(mobileValidation.createMobile),
  Controller.createMobile
);

/** Crate Mobile.validation list */
router.get(
  "/list-mobile",
  // validate(mobileValidation.getMobile),
  Controller.getMobile
);

router.get(
  "/list-mobilefilter",
  // validate(mobileValidation.getMobile),
  Controller.getMobileFilter
);

router.delete(
  "/delete-mobile/:Id",
  Controller.deleteMobile
);

router.put(
  "/update-mobile/:Id",
  Controller.updateMobile
);

module.exports = router;