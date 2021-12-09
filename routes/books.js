const express = require("express");
const router = express.Router();
const booksController = require("../controllers/booksController");

router.get("/volumes", booksController.volume_search);

module.exports = router;
