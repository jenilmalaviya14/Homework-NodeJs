const express = require("express");
const router = express.Router();
const { orderValidation } = require("../../validation");
const { orderController } = require("../../controllers");
const validate = require("../../middlewares/validate");

// Create order

router.post(
    "/create-order",
    validate(orderValidation.createOrder),
    orderController.createOrder
);

// List order
router.get(
    "/list-order",
    validate(orderValidation.listOrder),
    orderController.listOrder
);

// Delete order
router.delete(
    "/delete-order/:Id",
    orderController.deleteOrder
);

// Update order
router.put(
    "/update-order/:id",
    orderController.updateOrder
);

module.exports = router;