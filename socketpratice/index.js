const express = require("express");
const http = require("http");
const app = express();
const path = require("path");
const socketIO = require("socket.io");
const PORT = 8080;
const moment = require("moment");
const server = app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

const io = socketIO(server);

app.use(express.static(path.join(__dirname, "src")));

//data를 보내주는 역할
io.on("connection", (socket) => {
  socket.on("chatting", (data) => {
    const { name, msg } = data;
    io.emit("chatting", {
      name,
      msg,
      time: moment(new Date()).format("h:ss A"),
    });
  });
});
