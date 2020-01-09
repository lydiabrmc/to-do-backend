Todo Application - Backend
This is the back end API of a Todo Application, built throughout the Tech Returners Your Journey Into Tech course. It is consumed by a front end React application, available here and connects to an RDS Database.

The hosted version of the application is available here: https://lydiabrmc.github.io/To-Do-React-App/.

Technology Used
This project uses the following technology:

Serverless Framework
JavaScript (ES2015+)
Express
SQL
Mysql library
AWS Lambda and API Gateway
AWS RDS
ESLint
Endpoints
The API exposes the following endpoints:

GET /tasks
https://y65zlhzmkj.execute-api.eu-west-1.amazonaws.com/dev/tasks

Responds with JSON containing all tasks in the Database.

POST /tasks
https://y65zlhzmkj.execute-api.eu-west-1.amazonaws.com/dev/tasks/:taskId

Will create a new task when sent a JSON payload in the format:

{
      "taskText": "taskText",
      "completed": 0,
      "dateCreated": "2020-01-09",
      "dateDue": ""
}

DELETE /tasks/:taskId
https://y65zlhzmkj.execute-api.eu-west-1.amazonaws.com/dev/tasks/:taskId

Deletes the task of the given ID.

PUT /tasks/:taskId
https://y65zlhzmkj.execute-api.eu-west-1.amazonaws.com/dev/tasks:taskId

Will update a task when sent a JSON payload in the format:

{
        "taskId": 1,
        "taskText": "Hoover the house",
        "completed": 1,
        "date": "2020-01-20",
        "id": 3
}
