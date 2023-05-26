const express = require("express");
const app = express();
const PORT = 8080;
//템플릿
app.set("view engine", "ejs");
app.use(express.static(__dirname + "views"));
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//pages
app.get("/", function (req, res) {
  res.render("index");
});

app.get("/pratice29", function (req, res) {
  res.render("pratice29");
});

app.get("/ajax", function (req, res) {
  console.log(req.query);
  //서버로직 (알고리즘)
  res.send(req.query);
});

app.get("/axios", function (req, res) {
  res.send(req.query);
});

app.get("/fetch", function (req, res) {
  res.send(req.query);
});

app.post("/axios", function (req, res) {
  res.send(req.body);
});

app.post("/ajax", function (req, res) {
  res.send(req.body);
});
app.post("/fetch", function (req, res) {
  res.send(req.body);
});

app.get("/pratice29", function (req, res) {
  res.send(req.query);
});

//Port 생성
app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
