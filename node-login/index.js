const express = require("express");
const app = express();
const PORT = 3000;
//템플릿
app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get('/', function(req, res) => {
//     res.render('index');
// })

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/oauth", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
