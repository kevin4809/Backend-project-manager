const { app } = require("./app");
const { db } = require("./utils/database");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const startServer = async () => {
  try {
    await db.authenticate();
    await db.sync();

    const PORT = 3002;

    app.listen(PORT, () => {
      console.log("App is working¡¡¡ :D");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
