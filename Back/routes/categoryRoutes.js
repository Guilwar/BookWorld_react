const express = require("express");
const router = express.Router();
const controller = require("../controllers/categoryControllers.js");

router.post("/", controller.getCategory);

module.exports = router;
