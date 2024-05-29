const express = require("express");
const router = express.Router();
const controller = require("../controllers/bookControllers.js");

router.post("/", controller.getBooks);

module.exports = router;
