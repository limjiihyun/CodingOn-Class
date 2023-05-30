const express = require("express");
const controller = require("../controller/user");
const router = express.Router();

//GET localhost:8000/user
router.get("/", controller.index);

//GET localhost:8000/user/signup
router.get("/signup", controller.signup);

//POST localhost:8000/user/signup
router.post("/signup", controller.Cpost_signup);

//GET localhost:8000/user/signin
router.get("/signin", controller.signin);

//POST localhost:8000/user/signin
router.post("/signin", controller.Cpost_signin);

//POST localhost:8000/user/profile
router.post("/profile", controller.Cpost_profile);

//PATCH localhost:8000/user/profile/edit
//이 라우터는 /profile/edit경로로 patch요청이 오면 해당 요청을 처리하는 
//핸들러 함수를 호출한다. 이러한 핸들러 함수는
//클라이언트로 부터 받은 요청을 처리하고, 
//필요에 따라 데이터베이스나 다른 작업을 수행하여 프로필 정보를 수정할 수 있다
//
router.patch("/profile/edit", controller.Cedit_profile);

//DELETE localhost:8000/user/profile/del
router.delete("/profile/del", controller.Cdel_profile);

//모듈사용
module.exports = router;