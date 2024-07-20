const express = require("express");

const reseñasRouter = require("../routes/reseñas.routes");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/reseñas", reseñasRouter);
}

module.exports = routerApi;
