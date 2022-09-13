const { User } = require("../models/userModel");
const { Task } = require("../models/taskModel");

const initModels = () => {

  User.hasMany(Task, { foreignKey: "userId" });
  Task.belongsTo(User);
};

module.exports = { initModels };
