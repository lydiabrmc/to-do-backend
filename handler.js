const express = require("express");
const serverlessHttp = require("serverless-http");
const cors = require("cors");
const bodyParser = require("body-parser")

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/tasks", function (request, response) {
  // Get all the tasks from the database.
  response.status(200).send("You requested all the tasks!");
});

app.delete("/tasks/:taskId", function (request, response) {
  // Delete the task with the given ID from the database
  const taskId = request.params.taskId;
  response.status(200).send(`Successfully deleted task ${taskId}`);
});

app.post("/tasks", function (request, response) {
  //Create the new task in the database
  const task = request.body;
  //{text: "hoover the car", completed: true, date: "2019-10-09"}
  response.status(201).send(`Successfully added ${task.text}`);
});

app.put("/tasks/:taskId", function (request, response) {
  const completed = request.params.taskId;
  response.status(202).send(`You have completed task ${completed}`)
});

module.exports.tasks = serverlessHttp(app);