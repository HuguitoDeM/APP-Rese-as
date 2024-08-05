const express = require("express");

const reseñasRouter = require("../routes/reseñas.routes");

function routerApi(app) {
  const router = express.Router();
  app.use("/api", router);
  router.use("/comentarios", reseñasRouter);
}

module.exports = routerApi;
