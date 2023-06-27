const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;

app.use(cors());
//템플릿
// app.set("view engine", "ejs");
// app.use("/views", express.static(__dirname + "/views"));
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// localhost:8000/todos
const indexRouter = require("./routes/index");
app.use("/", indexRouter);

app.get("/", function (req, res) {
  res.send("hello");
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
