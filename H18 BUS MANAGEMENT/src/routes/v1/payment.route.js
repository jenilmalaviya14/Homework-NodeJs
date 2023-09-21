const express = require("express");
const router = express.Router();
const { paymentValidation } = require("../../validation");
const { paymentController } = require("../../controllers");
const validate = require("../../middlewares/validate");

// Create payment

router.post(
    "/create-payment",
    validate(paymentValidation.createPayment),
    paymentController.createPayment
);

// List payment
router.get(
    "/list-payment",
    validate(paymentValidation.listPayment),
    paymentController.listPayment
);

// Delete payment
router.delete(
    "/delete-payment/:Id",
    paymentController.deletePayment
);

// Update payment
router.put(
    "/update-payment/:id",
    paymentController.updatePayment
);

module.exports = router;