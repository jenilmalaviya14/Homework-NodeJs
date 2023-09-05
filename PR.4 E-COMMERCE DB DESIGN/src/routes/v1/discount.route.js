const express = require("express");
const router = express.Router();
const { discountValidation } = require("../../validation");
const { discountController } = require("../../controllers");
const validate = require("../../middlewares/validate");

// Create discount

router.post(
    "/create-discount",
    validate(discountValidation.createDiscount),
    discountController.createDiscount
);

// List discount
router.get(
    "/list-discount",
    validate(discountValidation.listDiscount),
    discountController.listDiscount
);

// Delete discount
router.delete(
    "/delete-discount/:Id",
    discountController.deleteDiscount
);

// Update discount
router.put(
    "/update-discount/:id",
    discountController.updateDiscount
);

module.exports = router;