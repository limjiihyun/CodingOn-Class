const express = require("express");
const SocketIO = require("socket.io");
const app = express();
const PORT = 8000;
//템플릿
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.get("/", (req, res) => res.render("app"));
const server = app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
const io = SocketIO(server);
const nickArray = {};
//유저 목록 업데이트
function updateNick() {
  io.emit("updateNick", nickArray);
}
io.on("connection", (socket) => {
  console.log(`server Connected >>`, socket.id);
  //io.emit("notice", `${socket.id}님이 입장하셨습니다.`);
  socket.on("setNick", (data) => {
    console.log(`nick >> ${data}`);
    if (Object.values(nickArray).indexOf(data) != -1) {
      socket.emit("error", "이미 존재하는 닉네임입니다.");
    } else {
      nickArray[socket.id] = data;
      io.emit("notice", `${data}님이 입장하셨습니다.`);
      updateNick();
    }
  });
  socket.on("send", (data) => {
    const sendData = { nick: data.nick, msg: data.msg };
    console.log(sendData);
    io.emit("newMessage", sendData);
  });
  //   socket.on("hello", (data, num, hi, cb) => {
  //     console.log(`${data.who} : ${data.msg}: ${num}: ${hi}`);
  //     cb();
  //     //socket.emit("sHello", { who: "Server", msg: "안녕하세요" });
  //   });
  //   socket.on("study", (data) => {
  //     console.log(`${data.who} : ${data.msg}`);
  //     socket.emit("sStudy", { who: "Server", msg: "공부합시다" });
  //   });
  //   socket.on("bye", (data) => {
  //     console.log(`${data.who} : ${data.msg}`);
  //     socket.emit("sBye", { who: "Server", msg: "잘가~~~" });
  //   });
  //   socket.on("disconnect", () => {
  //     console.log(`Server disconnected >>`, socket.id);
  //   });
});
