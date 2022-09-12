const { body, validationResult } = require("express-validator");

const checkValidations = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((err) => err.msg);

    const message = errorMessages.join(". ");

    return res.status(400).json({
      status: "error",
      message,
    });
  }

  next();
};

const createUserValidators = [
  body("name")
    .isString()
    .withMessage("Name must be a string")
    .notEmpty()
    .withMessage("Name cannot be empty")
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters"),
  body("email").isEmail().withMessage("Must provide a valid email"),
  body("password")
    .isString()
    .withMessage("Password must be a string")
    .notEmpty()
    .withMessage("Password cannot be empty")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters"),
  checkValidations,
];

const createTaskValidator = [
  body("title")
    .notEmpty()
    .withMessage("title can't be empty")
    .isString()
    .withMessage("title must be a string "),
  body("userId")
    .isNumeric()
    .withMessage("userId must be a number ")
    .custom((val) => {
      return val > 0;
    })
    .withMessage("userId can't be a negateve value"),
  checkValidations,
];

module.exports = { createUserValidators, createTaskValidator };