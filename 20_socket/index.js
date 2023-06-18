const express = require("express");
//const WebSocket = require("ws");
const SocketIO = require("socket.io");
const app = express();
const PORT = 8000;
//템플릿
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("index"));
const server = app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
//const ws = new WebSocket.Server({ server });
const io = SocketIO(server);
const nickArray = [];
io.on("connection", (socket) => {
  console.log("socketId: ", socket.id);
  socket.on("chat", (value, room, call) => {
    console.log(value);
    socket.to(room).emit("new_chat", value.msg);
    call();
  });
  socket.on("room", (value, call) => {
    socket.join(value.msg);
    call();
    socket.to(value.msg).emit("Welcome", nickArray[nickArray.length - 1]);
  });
  socket.on("nick", (value) => {
    nickArray.push(value);
    console.log(nickArray);
  });
  /*
  socket.on("HELLO", (value) => {
    console.log(value);
    socket.emit("s_hello", { msg: "안녕하세요" });
  });
  socket.on("study", (value) => {
    console.log(value);
    socket.emit("s_study", { msg: "공부합시다" });
  });
  socket.on("bye", (value) => {
    console.log(value);
    socket.emit("s_bye", { msg: "안녕히가세요" });
  });
  */
});
/*
ws.on("connection", (socket) => {
  //console.log(socket);
  socket.on("message", (message) => {
    console.log(message.toString());
  });
  socket.send("Hello World");
});
*/
