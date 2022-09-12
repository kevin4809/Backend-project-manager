const { db } = require("../utils/database");
const { DataTypes } = require("sequelize");

const User = db.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: true,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "active ",
  },
});

module.exports = { User };
