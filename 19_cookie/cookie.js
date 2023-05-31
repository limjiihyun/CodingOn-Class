const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv").config();
const app = express();
const PORT = 8080;

// dotenv.config();
// console.log(process.env);

//쿠키
//cookieParser('secretKey', 옵션 객체)
//secretKey: 비밀키
// - 서명된 쿠키가 있는 경우, 제공한 비밀키르르 통해 해당 쿠키가 내 서버가 만든 쿠키 임을 인증 가능
// - 쿠키는 클라이언트에서 위조가 쉬우므로 비밀키를 통해 만든 서명을 쿠키 값 뒤에 붙임
// - 서명이 붙으면 쿠키가 key=value.sign형태
// - 서명된 쿠키는 req.cookies - req.signedCookies객체에 들어있음
const cookieOption = {
  maxAge: 60 * 1000, //1분, 1000은 1초임
  httpOnly: true,
  signed: true,
};
/**
 * maxAge : 수명
 * expires : 만료 날짜를 gmt시간으로 설정
 * path : 해당 디렉토리와 하위 디렉토리에서만 경로가 활성화되고, 웹브라우저는 해당하는 쿠키만 웹 서버에 전송한다.
 * domain : 쿠키가 전송될 특정 도메인 (기본값: 현재 도메인)
 * secure : 웹 브라우저와 웹 서버가 https로 통신하는 경우만 웹브라우저가 쿠키를 서버로 전송
 * httpOnly : 웹 서버를 통해서만 쿠키에 접근(자바스크립트 document.cookie를 이용해서 쿠키에 접속을 막는 것)
 * signed : 쿠키의 암호화를 결정
 *
 */
//ver1: 일반적인 쿠키
//app.use(cookieParser());
//ver2: 암호화된 쿠키

app.use(cookieParser(process.env.COOKIE_SECRET));

//템플릿
app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));

app.get("/", (req, res) => {
  // console.log(process.env);
  // console.log("COOKIE_SECRET", process.env.COOKIE_SECRET);

  res.cookie("codingon", "kdt7", cookieOption);
  res.render("index");
});

app.get("/getCookie", (req, res) => {
  console.log(req.signedCookies);
  res.send(req.cookies);
});

//쿠키 제거
app.get("/clearCookie", (req, res) => {
  //res.clearCookie(키, 값, 옵션)
  //키, 값, 옵션이 생성한 것과 동일해야 함, maxAge는 일치할 필요 X
  res.clearCookie("codingon", "kdt7", cookieOption);
  res.send({ result: "clear" });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
