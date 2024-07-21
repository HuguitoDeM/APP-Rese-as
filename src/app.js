const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const routerApi = require("./routes/index");
const port = process.env.PORT || 8080;
dotenv.config();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend con NodeJs- Express + CRUD API REST + MongoDB");
});

routerApi(app);

app.listen(port, (err) => {
  if (err) {
    console.error("Error al iniciar el servidor " + err);
    return;
  }
  console.log(`Port ==> ${port}`);
});
