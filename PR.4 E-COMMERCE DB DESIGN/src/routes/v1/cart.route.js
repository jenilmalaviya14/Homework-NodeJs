const express = require("express");
const router = express.Router();
const { cartValidation } = require("../../validation");
const { cartController } = require("../../controllers");
const validate = require("../../middlewares/validate");

// Create cart

router.post(
    "/create-cart",
    validate(cartValidation.createCart),
    cartController.createCart
);

// List cart
router.get(
    "/list-cart",
    validate(cartValidation.listCart),
    cartController.listCart
);

// Delete cart
router.delete(
    "/delete-cart/:Id",
    cartController.deleteCart
);

// Update cart
router.put(
    "/update-cart/:id",
    cartController.updateCart
);

module.exports = router;