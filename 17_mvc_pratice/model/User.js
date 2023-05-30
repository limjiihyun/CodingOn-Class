const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "kdtuser",
  password: "1234",
  database: "kdt7",
});

//POST: localhost:8080/user/signup
//사용자 정보를 mysql데이터베이스에 저장하는 기능을 제공
//node.js에서 mysql데이터베이스에 사용자 정보를 삽입하는 함수를 말함
//함수이름은 Mpost_signup이며, 입력 매개 변수로 data와 call이 제공
//함수 내부에서는 sql insert문을 사용하여 user 테이블에 데이터를 삽입하는 쿼리를 생성
//data매개변수에서 가져온 userid, name, pw값을 사용하여 user 테이블에 새로운레코드를 삽입하려고 한다
//생성된 쿼리를 conn.query()메서드로 실행하여 mysal데이터 베이스로 전송
// 이 메서드는 쿼리를 실행하고 콜백함수를 제공하여 결과를 철
//만약 에러 발생하면, err매개변수를 통해 에러를 콘솔에 출력하고
//성공적으로 실행되면 rows매개변수를 콘솔에 출력한 후, call() 함수를 호출한다.
//call함수는 Mpost_signup함수 완료 후 실행된다
exports.Mpost_signup = (data, call) => {
  const query = `INSERT INTO user(userid, name, pw) VALUES
  ('${data.userid}', '${data.name}', '${data.pw}')`;

  conn.query(query, (err, rows) => {
    if (err) {
      console.log(err);
    }
    console.log("Mpost_signup", rows);
    call();
  });
};
//
//post: localhost:8080/user/signin
exports.Mpost_signin = (data, call) => {
  const query = `SELECT * FROM user WHERE userid='${data.userid}' AND pw='${data.pw}'`;
  conn.query(query, (err, rows) => {
    if (err) {
      console.log("err:", err);
    }
    console.log("Mpost_signin", rows);
    call(rows);
  });
};
//회원정보
//특정 사용자의 프로필을 조회하는 함수
//select문을 사용하여 user테이블에서 지정된 userid 값을 가진 레코드를 조회하는 쿼리를 생성
//data매개변수에서 가져온 userid값을 사용하여 쿼리를 구성한다.
//conn.query() 메서드로 실행하여 mysql데이터베이스에 전송
//이 메서드는 쿼리를 실행하고 콜백함수를 제공하여 결과를 처리
exports.Mpost_profile = (data, call) => {
  const query = `SELECT * FROM user WHERE userid='${data.userid}'`;
  conn.query(query, (err, rows) => {
    if (err) {
      console.log(err);
    }
    console.log("Medit_profile", rows);
    call();
  });
};
//삭제
exports.Mdel_profile = (data, call) => {
  const query = `DELETE FROM user WHERE id ='${data.id}'`;
  conn.query(query, (err, rows) => {
    if (err) {
      console.log(err);
    }
    console.log("Mdel_profile", rows);
    call();
  });
};
