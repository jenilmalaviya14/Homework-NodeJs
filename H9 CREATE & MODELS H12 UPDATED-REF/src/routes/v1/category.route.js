const express = require("express");
const router = express.Router();
const categoryValidation = require("../../validation/category.validation");
const {categoryController} = require("../../controllers");
const validate = require("../../middlewares/validate");


/** Crate Category list */
router.post(
  "/create-category",
  validate(categoryValidation.createCategory),
  categoryController.createCategory
);

router.get(
  "/List-category",
  validate(categoryValidation.getCategory),
  categoryController.getCategory
);

router.delete(
  "/delete-category/:Id",
  categoryController.deleteCategory
);

router.put(
  "/update-category/:Id",
  categoryController.updateCategory
);

module.exports = router;