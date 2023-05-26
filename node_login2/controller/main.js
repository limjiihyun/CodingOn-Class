const comment = require("../model/comment");

exports.main = (req, res) => {
  res.render("index");
};

exports.database = (req, res) => {
  res.render("login", { database: comment.database() });
};
