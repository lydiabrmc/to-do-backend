const express = require("express");
const serverlessHttp = require("serverless-http");
const cors = require("cors");
const bodyParser = require("body-parser")
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'todos'
});

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/tasks", function (request, response) {
  // Get all the tasks from the database.
  connection.query("SELECT * from Task", function (err, data) {
    if (err) {
      response.status(500).json({ error: err });
    } else {
      response.status(200).json(data);
    }
  });
});

app.delete("/tasks/:taskId", function (request, response) {
  const taskId = request.params.taskId;
  connection.query("DELETE from Task WHERE taskId = ?", [taskId], function (err) {
    if (err) {
      response.status(500).json({ error: err });
    } else {
      response.sendStatus(200);
    }
  })
});

app.post("/tasks", function (request, response) {
  //Create new task in the database
  const task = request.body;
  task.completed = false;
  const q = "INSERT INTO Task SET ?";
  connection.query(q, task, function (err, data) {
    if (err) {
      response.status(404).json({ error: err });
    } else {
      task.taskId = data.insertId;
      response.status(201).json(task);
    }
  })
});

app.put("/tasks/:taskId", function (request, response) {
  const taskId = request.params.taskId;
  // complete tasks and update the status to complete
  const q = "UPDATE Task SET completed = ? WHERE taskId = ?";
  connection.query(q, [1, taskId], function (err) {
    if (err) {
      response.status(500).json({ error: err });
    } else {
      response.sendStatus(205)
    }
  });
});

module.exports.tasks = serverlessHttp(app);