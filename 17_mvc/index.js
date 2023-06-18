const express = require("express");
// const controller =
// const multer = require("multer");
const app = express();
const PORT = 8888;

//템플릿
app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "views"));

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router 를 불러오는 부분
//아래 코드를 이용해 특정 url의 역할 구분 가능하다.
//미들웨어,라우터 하나의 독립된 기능을 가진 함수
const indexRoute = require("./routes");
app.use("/", indexRoute);

//GET
app.get("/", (req, res) => {
  res.render("index");
});

//404처리-> 잘못된 링크에 접속시
app.get("*", function (req, res) {
  res.render("404");
});

//Port 생성
app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
