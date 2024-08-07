const { getComentarios } = require("../libs/mongodb");
const { Int32 } = require("mongodb");
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

      const intId = new Int32(parseInt(id, 10));
      console.log("Int32 ID:", intId);

      const doc = await collection.findOne({ _id: intId });
      if (!doc) {
        throw new Error("Artículo no encontrado.");
      }

      const result = await collection.deleteOne({ _id: intId });
      console.log("Resultado de eliminación:", result);

      if (result.deletedCount === 0) {
        throw new Error("No se ha podido eliminar el artículo.");
      }

      return result;
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      if (client) {
        client.close();
      }
    }
  }
}
module.exports = reseñaService;
