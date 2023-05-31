const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8000;

const userInfo = { id: "abc", pw: "123" };

//세션설정
//express-session은 express애플리케이션에서 세션관리를 위한 미들웨어로 사용
//secret: 세션을 암호화 하기 위한 비밀키, 이 비밀키는 세션 데이터를 암호화하고,복호화 하는데 사용
//resave: 변경사항이 없더라도 세션을 다시 저장할 지 여부를 설정, 일반적으로 false로 설정하여 변경사항이 없을 경우, 세션을 다시 저장하지 않도록 함
//saveUninitialized : 초기화 되지 않은 세션도 저장할지 여부 설정, 일반적으로true로 설정하여 모든 요청에 대해 세션을 유지하는 것을 권장
app.use(
  session({
    secret: "mysecretKey",
    resave: false,
    saveUninitialized: true,
  })
);

//템플릿
app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  const user = req.session.user;
  console.log(user);

  if (user === undefined) {
    res.render("app", { isLogin: false });
  } else {
    res.render("app", { isLogin: true, user: user });
  }
});
app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  console.log(req.body);
  if (req.body.id === userInfo.id && req.body.pw === userInfo.pw) {
    req.session.user = req.body.id;
    res.redirect("/");
    //render는 템플릿을 불러오고, redirect는 url로 이동을 한다.
    //url로 이동한다는 것은 그 url에 맞는 views가 다시 실행되고, 여기서 render를 할지 다시 redirect할지 결정
  } else {
    res.send({ result: false });
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
