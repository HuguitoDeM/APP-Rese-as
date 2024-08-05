const { getComentarios } = require("../libs/mongodb");
const { ObjectId } = require("mongodb");
class reseñaService {
  constructor() {}

  async find() {
    let client;
    try {
      const { client: MongoClient, collection } = await getComentarios();
      client = MongoClient;
      const res = await collection.find().toArray();
      return res;
    } catch (error) {
      console.error(error);
    }
  }

  async create(data) {
    let client;
    try {
      const { client: mongoClient, collection } = await getComentarios();
      client = mongoClient;
      const res = await collection.insertOne(data);
      return res;
    } catch (error) {
      console.error(error);
    }
  }
  async delete_(id) {
    let client;
    try {
      const { client: mongoClient, collection } = await getComentarios();
      client = mongoClient;
      collection.findOneAndDelete({ _id: id }, (err) => {
        if (err) {
          return res.status(509).json({
            status: "error",
            message: "No se ha podido eliminar el artículo.",
          });
        }
      });
      return res;
    } catch (error) {
      console.error(error);
    }
  }
}
module.exports = reseñaService;
