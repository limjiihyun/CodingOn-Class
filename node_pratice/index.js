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

app.get("/pratice26", function (req, res) {
  // res.send("실습 26번");
  res.render("pratice26");
});

//localhost:8080/result
app.get("/result26", function (req, res) {
  console.log(req.query);
  res.render("result", {
    title: "실습26번 해설입니다.",
    info: req.query,
  });
});

//localhost:8080/pratice27
app.get("/pratice27", function (req, res) {
  res.render("pratice27");
});

// app.post("/result27", function (req, res) {
//   res.render("result", {
//     title: "실습 27 해설입니다.",
//     info: req.body,
//   });
// });

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
