const express = require("express");
const router = express.Router();
const categoryValidation = require("../../validation/category.validation");
const Controller = require("../../controllers/category.controllers");
const validate = require("../../middlewares/validate");


/** Get user list */
router.post(
    "/create-category",
    validate(categoryValidation.createCategory),
    Controller.createCategory
  );

  module.exports = router;