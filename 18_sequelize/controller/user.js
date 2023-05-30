const models = require("../models");
//sequelize orm을 사용할 때, sequelize모듈에서 Op객체를 가져오는 코드이다
//op객체는 sequelize에서 제공하는 연산자 객체로, 데이터베이스 쿼리 작성시
//다양한 연산자를 사용할 수 있도록 돕는다.
const { Op } = require("sequelize");

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

exports.Cpost_signup = (req, res) => {
  models.User.create({
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.pw,
  }).then(() => {
    res.send({ result: true });
  });
};

exports.Cpost_signin = (req, res) => {
  //SELECT * FROM user
  //models.User.findAll({});
  //SELECT * FROM user  LIMIT 1;
  //models.User.findOne({});
  //SELECT name, userid FROM user;
  //models.User.findOne({
  //원하는 컬럼 가져올때 attributes사용
  //  attributes: ["name", "userid"],
  //});
  //연산자
  //Op.gt(초과), Op.gte(이상), Op.lt(미만), Op.lte(이하)
  //Op.ne(같지 않음), Op.or(또는), Op.in(배열 요소중 하나), Op.notIn(배열 요소와 모두 다름)
  //SELECT * FROM user WHERE id >= 2;
  //id가 2이상인 모든 데이터를 조회하는 코드

  // models.User.findAll({
  //   where: {
  //     id: { [Op.gte]: 2 },
  //   },
  // });

  //SELECT * FROM user WHERE id > 2 OR name = 'aaa';
  // name이 aaa인 또는 id가 2보다 큰 모든 데이트를 조회하는 코드

  // models.User.findAll({
  //   where: {
  //     [Op.or]: [{ name: "aaa" }, { id: { [Op.gt]: 2 } }],
  //   },
  // });

  // SELECT name, userid FROM user ORDER BY id DESC;
  // user 모델에서 name, userid필드를 선택하고,
  //id필드를 기준으로 내림차순으로 정렬하여 데이터를 조회하는 코드

  // models.User.findAll({
  //   attributes: ["name", "userid"],
  //   order: [["id", "DESC"]],
  // });

  //SELECT name, userid FROM user ORDER BY id DESC LIMIT 10;
  //SELECT name, userid FROM user ORDER BY id DESC LIMIT 10 OFFSET 5;
  // user모델에서 name, userid필드를 선택하고, id필드를 기준으로 내림차순으로 정렬한 뒤,
  //결과를 5번째 부터 10개 까지 조회하는 코드
  // models.User.findAll({
  //   attributes: ["name", "userid"],
  //   order: [["id", "DESC"]],
  //   limit: 10,
  //   offset: 5,
  // });

  //user모델에서 userid와 pw필드가 일치하는 사용자를 찾아 로그인 기능을 구현하는 코드
  //req.body.userid와 req.body.pw는 http요청의 바디(body)에서 사용자가 입력한 아이디와 비밀번호를 나타냄
  //res는 http응답객체이다.
  //findOne() 메서드는 프로미스(Promise)를 반환하므로,
  //then()을 사용하여 비동기 처리 결과를 받는다.
  //then()콜백함수는 조회 결과인 value를 전달받는다

  models.User.findOne({
    where: {
      userid: req.body.userid,
      pw: req.body.pw,
    },
  }).then((value) => {
    console.log("Cpost_signin", value);

    if (value) {
      res.send({ result: true, data: value.dataValues });
    } else {
      res.send({ result: false });
    }
  });
};

//user모델에서 userid필드가 req.body.userid와 일치하는 사용자를 조회하여
//프로필 정보를 렌더링하는 기능을 구현하는 코드이다.
//req는 http요청 객체이고, res는 http응답 객체이다.

//value는 findAll메서드의 결과인 user 모델의 데이터 배열이다.
//.then은 js에서 프로미스 객체의 메스드 중 하나, 프로미스는 비동기 작업의 결과를
//다룰수 있는 객체로, 비동기 작업이 완료되면 성공한 경우(resolve)와 실패한 경우(reject)에 대한
//처리를 수행
//.then은 프로미스의 성공(resolve)상태에 대한 처리를 수행하는 메서드

exports.Cpost_profile = (req, res) => {
  models.User.findAll({
    where: { userid: req.body.userid },
    limit: 1,
  }).then((value) => {
    console.log("Cpost_profile", value);
    if (value) {
      res.render("profile", { result: true, data: value[0].dataValues });
      // res.send({ result: true, ...value });
    } else {
      res.send({ result: false });
    }
  });
};

// 사용자 프로필을 편집하는 기능
// update() 메서드는 프로미스(Promise)를 반환하므로,
// then()을 사용하여 비동기 처리 결과를 받습니다.
// 여기서는 업데이트 작업이 완료된 후에 { result: true }와 같은 응답을 클라이언트에게 전송합니다.
exports.Cedit_profile = (req, res) => {
  models.User.update(
    {
      userid: req.body.userid,
      name: req.body.name,
      pw: req.body.pw,
    },
    { where: { id: req.body.id } }
  ).then(() => {
    res.send({ result: true });
  });
};

exports.Cdel_profile = (req, res) => {
  models.User.destroy({
    where: { id: req.body.id },
  }).then(() => {
    res.send({ result: true });
  });
};
