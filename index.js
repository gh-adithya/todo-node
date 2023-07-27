import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render(__dirname + "/views/index.ejs", {});
});

var allTasks = [];
// var crossedList = [];

app.post("/submit", (req, res) => {
  var newTask = req.body["task"];
  var idno = allTasks.length;
  allTasks.push({ idno, newTask });
  res.render(__dirname + "/views/index.ejs", {
    tasksList: allTasks,
    taskId: idno,
  });
});

// app.post("/checked", (req, res) => {
//   console.log(req.body);
//   res.render(__dirname + "/views/index.ejs", {
//     crossedOnes: crossedList,
//   });
//   console.log(crossedList)
// });

app.listen(3000, (req, res) => {
  console.log("listening on port 3000");
});
