const Reseña = require("../db/models/reseña.model");

class reseñaService {
  constructor() {}

  async find() {
    const res = await Reseña.find();
    return res;
  }

  async create(data) {
    const res = await Reseña.insertOne(data);
    return res;
  }
  async delete_(id) {
    const res = await Reseña.deleteOne(id);
    return res;
  }
}
module.exports = reseñaService;
