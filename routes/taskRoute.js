const express = require("express");

const taskRoutes = express.Router();

//controllers
const {
  createWork,
  getAllTasks,
  getTaskByStatus,
  UpdateTasks,
  deletedTask,
} = require("../controllers/taskController");

//middlawares
const { idExistTask } = require("../middlewares/existTaskMiddlaware");
const {
  createTaskValidator,
} = require("../middlewares/validatorMiddlawere.js");

taskRoutes.post("/", createTaskValidator, createWork);

taskRoutes.get("/", getAllTasks);

taskRoutes.get("/status", getTaskByStatus);

taskRoutes.patch("/id", idExistTask, UpdateTasks);

taskRoutes.delete("/id", idExistTask, deletedTask);

module.exports = { taskRoutes };
