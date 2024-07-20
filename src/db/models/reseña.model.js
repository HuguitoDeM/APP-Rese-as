const mongoose = require("mongoose");

const reseñaSchema = new mongoose.Schema({
  id: { unique: true, type: Number },
  nombre: { type: String, required: true },
  estrellas: { type: Number, required: true },
  comentario: { type: String, required: true },
});
reseñaSchema.plugin(AutoIncrement, { inc_field: "id" });

const Reseña = mongoose.model("Reseña", personSchema);

module.exports = Reseña;
