const express = require("express");
const app = express();
const PORT = 8080;

//view
app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
//localhost:8080/user
const userRouter = require("./routes/user");
app.use("/user", userRouter);

//404
app.get("*", function (req, res) {
  res.render("404");
});

//PORT
app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
