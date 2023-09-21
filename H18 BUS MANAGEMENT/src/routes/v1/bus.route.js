const express = require("express");
const router = express.Router();
const { busValidation } = require("../../validation");
const { busController } = require("../../controllers");
const validate = require("../../middlewares/validate");


/** Crate bus list */
router.post(
  "/create-bus",
  validate(busValidation.createBus),
  busController.createBus
);

/** Crate bus list */
router.get(
  "/list-bus",
  validate(busValidation.listBus),
  busController.listBus
);

router.delete(
  "/delete-bus/:Id",
  busController.deletebus
);

router.put(
  "/update-bus/:Id",
  busController.updatebus
);

module.exports = router;