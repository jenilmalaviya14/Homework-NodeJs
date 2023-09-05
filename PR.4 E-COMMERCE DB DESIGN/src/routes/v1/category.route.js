const express = require("express");
const router = express.Router();
const { categoryValidation } = require("../../validation");
const { categoryController } = require("../../controllers");
const validate = require("../../middlewares/validate");

// Create Category

router.post(
    "/create-category",
    validate(categoryValidation.createCategory),
    categoryController.createCategory
);

// List Category
router.get(
    "/list-category",
    validate(categoryValidation.listCategory),
    categoryController.listCategory
);

// Delete Category
router.delete(
    "/delete-category/:Id",
    categoryController.deleteCategory
);

// Update Category
router.put(
    "/update-category/:id",
    categoryController.updateCategory
);

module.exports = router;