const express = require("express");
const router = express.Router();
const { bookingValidation } = require("../../validation");
const { bookingController } = require("../../controllers");
const validate = require("../../middlewares/validate");

// Create booking

router.post(
    "/create-booking",
    validate(bookingValidation.createBooking),
    bookingController.createBooking
);

// List booking
router.get(
    "/list-booking",
    validate(bookingValidation.listBooking),
    bookingController.listBooking
);

// Delete booking
router.delete(
    "/delete-booking/:Id",
    bookingController.deleteBooking
);

// Update booking
router.put(
    "/update-booking/:id",
    bookingController.updateBooking
);

module.exports = router;