const express = require("express");
const router = express.Router();
const { productValidation } = require("../../validation");
const { productController } = require("../../controllers");
const validate = require("../../middlewares/validate");

// Create product

router.post(
    "/create-product",
    validate(productValidation.createProduct),
    productController.createProduct
);

// List product
router.get(
    "/list-product",
    validate(productValidation.listProduct),
    productController.listProduct
);

// Delete product
router.delete(
    "/delete-product/:Id",
    productController.deleteProduct
);

// Update product
router.put(
    "/update-product/:id",
    productController.updateProduct
);

module.exports = router;