const express = require("express");
const app = express();
const PORT = 8000;
//템플릿
app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//임시 database 변수

app.get("/", (req, res) => {
  res.render("index");
});
app.post("/login", (req, res) => {
  console.log(req.body);
  // if (req.body.id !== id) {
  //   res.send({ result: false, msg: "존재하지 않는 사용입니다" });
  // }
  if (req.body.id === id && req.body.pw === pw) {
    res.send({ result: true, userInfo: req.body, msg: "성공하였습니다." });
  } else {
    res.send({ result: false, msg: "로그인 실패" });
  }
});

//404
app.get("*", function (req, res) {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
