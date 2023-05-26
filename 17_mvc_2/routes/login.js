const express = require("express");
const controller = require("../controller/main");
const router = express.Router();

// //localhost:8000/
// router.get("/", controller.main);
// //localhost:8000/login
// router.get("/login", controller.comments);
// //localhost:8000/comments/:page
// router.get("/comment/:page", controller.comment);

module.exports = router;
