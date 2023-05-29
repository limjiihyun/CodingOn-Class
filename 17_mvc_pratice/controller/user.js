const user = require("../model/User");

exports.index = (req, res) => {
  res.render("index");
};

exports.signup = (req, res) => {
  //views/signup.ejs
  res.render("signup");
};

exports.signin = (req, res) => {
  res.render("signin");
};

//회원가입
exports.Cpost_signup = (req, res) => {
  //모델에서 만든 모듈
  user.Mpost_signup(req.body, () => {});
};

//로그인
exports.Cpost_signin = (req, res) => {
  user.Mpost_signin(req.body, (value) => {
    if (value.length > 0) {
      res.send({ result: true, data: value[0] });
    } else {
      console.log("No");
    }
  });
};
//회원정보
exports.Cpost_profile = (req, res) => {
  user.Mpost_profile(req.body, (value) => {
    console.log(value);
    if (value.length > 0) {
      res.render("profile", { data: value[0] });
    } else {
      console.log("No");
    }
  });
};
//회원수정
exports.Cedit_profile = (req, res) => {
  user.Medit_profile(req.data, () => {
    res.send({ result: true });
  });
};
