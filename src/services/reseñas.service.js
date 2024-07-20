const Reseña = require("../db/models/reseña.model");

class reseñaService {
  constructor() {}

  async find() {
    const res = await Reseña.find();
    return res;
  }

  async create(data) {
    const nuevaReseña = new Reseña(data);
    const res = await nuevaReseña.save();
    return res;
  }
  async delete_(id) {
    const res = await Reseña.findByIdAndDelete(id);
    return res;
  }
}
module.exports = reseñaService;
