const express = require("express");
const controller = require("../controller/visitor");
const router = express.Router();

// router.get("/", 컨트롤에서 만든 모듈함수);
router.get("/", controller.main);
router.get("/visitor", controller.getVisitor);

module.exports = router;
