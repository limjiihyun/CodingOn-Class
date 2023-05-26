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
// const id = "banana";
// const pw = "4321";
// const database = {
//   id: 'banana',
//   pw: '4321'
// }
app.get("/", (req, res) => {
  res.render("index");
});
app.post("/login", (req, res) => {
  console.log(req.body);
  if (req.body.id !== id) {
    res.send({ result: false });
  }
  if (req.body.id === id && req.body.pw === pw) {
    res.send({ result: true, userInfo: req.body });
  } else {
    res.send({ result: false });
  }
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
