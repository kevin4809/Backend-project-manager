const express = require("express");

const userRoutes = express.Router();

//Controllers
const {
  createUser,
  getAllUsers,
  UpdateUsers,
  deleteUser,
} = require("../controllers/userController");

//middlawares
const { idExist } = require("../middlewares/existMiddlaware");
const { createUserValidators } = require("../middlewares/validatorMiddlawere");

userRoutes.post("/", createUserValidators, createUser);

userRoutes.get("/", getAllUsers);

userRoutes.patch("/id", idExist, UpdateUsers);

userRoutes.delete("/id", idExist, deleteUser);

module.exports = { userRoutes };
