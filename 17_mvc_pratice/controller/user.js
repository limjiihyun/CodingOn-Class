const user = require("../model/User");

exports.index = (req, res) => {
  res.render("index");
};

exports.signup = (req, res) => {
  //views/signup.ejs
  res.render("signup");
};

exports.singin = (req, res) => {
  //views/signin.ejs
  res.render("signin");
};

//회원가입
exports.Cpost_signup = (req, res) => {
  //모델에서 만든 모듈
  user.Mpost_signup(req.body, () => {
    res.send({ result: true });
  });
};
//로그인
//함수 내부에서는 req.body를 인자로 전달하여 user.Mpost_signup() 함수를 호출한다
//이는 클라이언트에서 전송된 요청의 본문(body)데이터를 사용하여 회원가입 작업을 수행하는 것
//req.body는 post요청의 본문에 담긴 데이터를 포함함
//user.Mpost_signup()함수는 회원가입 작업을 수행하고, 콜백함수를 호출하여
//작업이완료되었을 떄의 처리를 수행
//value의 길이가 0보다 크면 (회원가입이 성공적으로 이루어졌으면)
//result: true, data:value[0]형태의 json응답을 클라이언트에게 보낸다
//이 응답은 회원가입 성공 여부를 타나내고, 성공 시 가입한 사용자의 데이터(`value[0]`)를 함께 전달
//value의 길이가 0이면 (회원가입이 실패한 경우) result: false형태의 json응답을
//클라이언트에게 보낸다. 이 응답은 회원가입 실패르 나타낸다.
exports.Cpost_signup = (req, res) => {
  user.Mpost_signin(req.body, (value) => {
    if (value.length > 0) {
      res.send({ result: true, data: value[0] });
    } else {
      res.send({ result: false });
    }
  });
};

//회원정보
exports.Cpost_profile = (req, res) => {
  user.Mpost_profile(req.body, (value) => {
    console.log(value);
    if (value.length > 0) {
      res.render("profile", { result: true, data: value[0] });
    } else {
      res.send({ result: false });
    }
  });
};
//회원수정
exports.Cedit_profile = (req, res) => {
  user.Medit_profile(req.body, () => {
    res.send({ result: true });
  });
};
//회원 삭제
exports.Cdel_profile = (req, res) => {
  user.Mdel_profile(req.body, () => {
    res.send({ result: true });
  });
};
