const express = require("express");
const router = express.Router();
const reseñasController = require("../controllers/reseñas.controller");

router.get("/", reseñasController.get);
router.post("/", reseñasController.create);
router.delete("/:id", reseñasController.delete_);

module.exports = router;
