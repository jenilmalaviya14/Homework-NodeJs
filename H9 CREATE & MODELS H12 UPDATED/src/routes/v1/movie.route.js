const express = require("express");
const router = express.Router();
const movieValidation = require("../../validation/movie.validation");
const Controller = require("../../controllers/movie.controller");
const validate = require("../../middlewares/validate");


/** Crate Category list */
router.post(
  "/create-movie",
  validate(movieValidation.createMovie),
  Controller.createMovie
);

router.get(
  "/List-movie",
  validate(movieValidation.getMovie),
  Controller.getMovie
);

router.delete(
  "/delete-movie/:Id",
  Controller.deleteMovie
);

router.put(
  "/update-category/:Id",
  Controller.updateMovie
);

module.exports = router;