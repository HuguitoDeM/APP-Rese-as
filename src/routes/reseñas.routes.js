const express = require("express");
const router = express.Router();
const { create, get, delete_ } = require("../controllers/reseñas.controller");

router.get("/", get);
router.post("/", create);
router.delete("/:id", delete_);

module.exports = router;
