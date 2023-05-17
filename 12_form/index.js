const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "views"));

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//localhost:8080
app.get("/", function (req, res) {
  res.render("index");
});

app.get("/getForm", function (req, res) {
  console.log(req.query);
  //   res.send("get 요청 성공");
  res.render("result", {
    title: "GET 폼 요청 결과 확인하기",
    userInfo: {
      id: req.query.id,
      password: req.query.password,
    },
  });
});

app.post("/postForm", function (req, res) {
  console.log(req);
  // res.send("POST 요청 성공");
  res.render("result", {
    title: "POST 요청 폼 결과 확인하기",
    userInfo: {
      id: req.body.id,
      abc: req.query.password,
    },
  });
});

// app.get("/pratice26", function (req, res) {
//   res.render("pratice26");
// });

app.get("/pratice26", function (req, res) {
  console.log(req.query);
  res.render("result", {
    title: "GET 요청 폼 결과 확인하기",
    userInfo: {
      id: req.query.id,
      gender: req.query.gender,
      month: req.query.month,
      hobby: req.query.hobby,
    },
  });
});

app.post("/pratice27", function (req, res) {
  console.log(req.body);
  res.send("post요청 성공!");
  //   res.render("pratice27", {
  //     title: "POST 요청 폼 결과 확인하기",
  //     userInfo: {
  //       id: req.body.id,
  //       gender: req.body.gender,
  //       month: req.body.month,
  //       hobby: req.body.hobby,
  //     },
  //   });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
