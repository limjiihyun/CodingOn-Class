const express = require("express");
const app = express();
const PORT = 8000;

//view
app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router
//localhost:8000/
const indexRouter = require("./routes/comment");
app.use("/", indexRouter);
//localhost:8000/user/
const userRouter = require("./routes/user");
app.use("/user", userRouter);
//localhost:8000/order
const orderRouter = require("./routes/order");
app.use("/order", orderRouter);

//localhost:8000/login
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

//404
app.get("*", function (req, res) {
  res.render("404");
});

//PORT
app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
