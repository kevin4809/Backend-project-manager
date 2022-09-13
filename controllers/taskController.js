const { Task } = require("../models/taskModel");
const { User } = require("../controllers/userController");

const createWork = async (req, res) => {
  try {
    const { title, startDate, limitDate, userId } = req.body;

    const newTask = await Task.create({
      title,
      startDate,
      limitDate,
      userId,
    });

    res.status(201).json({
      status: "success",
      data: { newTask },
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await Task.findAll({
      include: [{ model: User }],
    });

    res.status(200).json({
      status: "success",
      data: { allTasks },
    });
  } catch (error) {
    console.log(error);
  }
};

const getTaskByStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const statusValidation = ["active, completed, late, cancelled"];

    const isValid = statusValidation.find((res) => res === status);

    if (!isValid) {
      res.status(404).json({
        status: "error",
        message: `this status doesn't exist in the database`,
      });
    }

    const allTaskById = await Task.findAll({ where: { status } });

    res.status(200).json({
      status: "success",
      data: { allTaskById },
    });
  } catch (error) {
    console.log(error);
  }
};

const UpdateTasks = async (req, res) => {
  try {
    const { task } = req;
    const { finishDate } = req.body;

    const limitDateNum = new Date(task.limitDate).getTime();
    const completeDate = new Date(finishDate).getTime();

    const isCompletedOrNot = limitDateNum - completeDate;

    if (isCompletedOrNot > 0) {
      await task.update({ finishDate, status: "completed" });
    } else {
      await task.update({ finishDate, status: "late" });
    }
  } catch (error) {
    console.log(error);
  }
};

const deletedTask = async (req, res) => {
  const { task } = req;

  await task.update({ status: "cancelled" });
};

module.exports = {
  createWork,
  getAllTasks,
  getTaskByStatus,
  UpdateTasks,
  deletedTask,
};
