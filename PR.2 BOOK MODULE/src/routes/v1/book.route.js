const express = require("express");
const router = express.Router();
const bookValidation = require("../../validation/book.validation");
const bookController = require("../../controllers/book.controller");
const validate = require("../../middlewares/validate");
// const { valid } = require("joi");


/** Creat Book list */

router.post(
    "/create-book",
    validate(bookValidation.createBook),
    bookController.createBook
);

router.get(
    "/list-book",
    validate(bookValidation.listBook),
    bookController.listBook
);

router.delete(
    "/delete-book/:Id",
    bookController.deletebook
)

module.exports = router