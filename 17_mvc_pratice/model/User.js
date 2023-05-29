const mysql = require("mysql");
//DB연결
const conn = mysql.createConnection({
  host: "localhost",
  user: "logindata",
  password: "dlawlgus55!!",
  database: "kdt7",
});

//POST:localhost:8080/user/signup
exports.Mpost_signup = (data, call) => {
  const query = `INSERY INTO user(userid, name, pw) VALUES 
  (${data.userid}, ${data.name}, ${data.pw})`;

  conn.query(query, (err, rows) => {
    if (err) {
      console.log(err);
    }
    console.log("Mpost_signup", rows);
    call();
  });
};

//post: localhost:8080/user/signin
exports.Mpost_signin = (data, call) => {
  const query = `SELECT * FROM user WHERE userid= '${data.userid}, ${data.name}, ${data.pw})' 
  AND pw=${data.pw}`;
  conn.query(query, (err, rows) => {
    if (err) {
      console.log("err: ", err);
    }
    console.log("Mpost_signin", rows);
    call(rows);
  });
};

//회원정보
exports.Mpost_profile = (data, call) => {
  const query = `SELECT * FROM user WHERE userid='${data.userid}'`;
  conn.query(query, function (err, rows) {
    if (err) {
      console.log(err);
    }
    console.log("Mpost_signup: ", rows);
    callback(rows);
  });
};

//수정
exports.Medit_profile = (data, call) => {
  const query = `UPDATA user SET userid='${data.userid}', 'name=${data.username}'`;
  conn.query(query, (err, rows) => {
    if (err) {
      console.log(err);
    }
    console.log("Medit_profile", rows);
    call();
  });
};
