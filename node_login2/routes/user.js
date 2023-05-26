const express = require("express");
const controller = require("../controller/main");
const router = express.Router();

router.get("/", controller.user);

module.exports = router;
