const express = require("express");

//Routes
const { userRoutes } = require("./routes/userRoute");
const { taskRoutes } = require("./routes/taskRoute");

const app = express();

app.use(express.json());

//EndPoints
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/tasks", taskRoutes);

app.all("*", (req, res) => {
  res.status(404).json({
    status: "error",
    message: `${req.method} ${req.url} does not exists in our server`,
  });
});

module.exports = { app };
