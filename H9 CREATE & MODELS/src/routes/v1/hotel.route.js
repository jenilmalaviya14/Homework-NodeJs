const express = require("express");
const router = express.Router();
const hotelValidation = require("../../validation/hotel.validation");
const Controller = require("../../controllers/hotel.controller");
const validate = require("../../middlewares/validate");


/** Crate hotel */
router.post(
  "/create-hotel",
  validate(hotelValidation.createhotel),
  Controller.createHotel
);

/**List hotel */
router.get(
  "/List-hotel",
  validate(hotelValidation.gethotel),
  Controller.getHotel
);

/**delete hotel */
router.delete(
  "/delete-hotel/:Id",
  Controller.deleteHotel
)
module.exports = router;