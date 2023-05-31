const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();
const PORT = 8080;

app.use(cookieParser());
// const cookieOption = {
//   maxAge: 60 * 1000,
// };

//템플릿
app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));

app.get("/", (req, res) => {
  res.render("index", { data: req.cookies.popup });
});

app.post("/setCookie", (req, res) => {
  res.cookie("popup", "hide", {
    maxAge: 60 * 1000,
  });
  res.send({ result: true });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
