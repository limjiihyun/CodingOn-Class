const express = require("express");

const controller = require("../controller/user");
const router = express.Router();

//GET localhost:8000/user/
router.get("/", controller.index);

//get localhost:8080/user/signup
router.get("/signup", controller.signup);

//post localhost:8080/user/signup
router.post("/signup", controller.Cpost_signup);

//get localhost:8080/user/signin
router.get("/signin", controller.signin);

//post localhost:8080/user/signin
router.post("/signin", controller.Cpost_signin);

//post localhost: 8080 /user/profile
router.post("/profile", controller.Cpost_profile);

//patch localhost:8080/user/profile/edit
router.patch("/profile/edit", controller.Cedit_profile);

//delete localhost:8080/user/profile/del

//모듈 사용
module.exports = router;
