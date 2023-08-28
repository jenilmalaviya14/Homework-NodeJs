const express = require("express");
const router = express.Router();
const categoryValidation = require("../../validation/category.validation");
const Controller = require("../../controllers/category.controller");
const validate = require("../../middlewares/validate");


/** Crate Category list */
router.post(
  "/create-category",
  validate(categoryValidation.createCategory),
  Controller.createCategory
);

router.get(
  "/List-category",
  validate(categoryValidation.getCategory),
  Controller.getCategory
);

router.delete(
  "/delete-category/:Id",
  Controller.deleteCategory
);

router.put(
  "/update-category/:Id",
  Controller.updateCategory
);

module.exports = router;