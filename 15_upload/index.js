const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8080;

//multer 설정
const upload = multer({
  dest: "uploads/",
});

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

const uploadMulter = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, `${Date.now()}-${req.body.id}${ext}`);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

//템플릿
app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//폴더설정
app.use("/uploads", express.static(__dirname + "/uploads"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/pratice", (req, res) => {
  res.render("pratice");
});

app.post("/upload", uploadDetail.single("fileName"), function (req, res) {
  console.log(req.file);
  console.log(req.body);
  res.send("파일업로드");
});

app.post("/upload/array", uploadDetail.array("fileName"), (req, res) => {
  res.send("멀티 파일 업로드");
});

app.post(
  "/upload/fields",
  uploadDetail.fields([{ name: "fileName1" }, { name: "fileName2" }]),
  (req, res) => res.send("각각 멀티 파일 업로드")
);

app.post("/dynamic", uploadDetail.single("dynamicUpload"), function (req, res) {
  console.log(req.file);
  res.send(req.file);
});

app.get("/axios", function (req, res) {
  res.send(req.query);
});

//Port 생성
app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
