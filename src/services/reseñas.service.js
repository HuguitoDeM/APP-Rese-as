const { models } = require("../libs/mongodb");

class reseñaService {
  constructor() {}

  async find() {
    const res = await models.mongoose.find();
    return res;
  }

  async create(data) {
    const res = await models.mongoose.insertOne(data);
    return res;
  }
  async delete_(id) {
    const res = await models.mongoose.deleteOne(id);
    return res;
  }
}
module.exports = reseñaService;
