const { db } = require("../utils/database");
const { DataTypes } = require("sequelize");

const Task = db.define("task", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    primaryKey: true,
    autoIncrement: true,
  },

  userId: {
    type: DataTypes.INTEGER,
  },

  title: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  limitDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },

  startDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },

  finishDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },

  status: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "active",
  },
});

module.exports = { Task };
