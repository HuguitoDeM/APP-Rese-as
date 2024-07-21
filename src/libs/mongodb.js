const mongoose = require("mongoose");
const { config } = require("../config/config");
const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = config.uri;

// Conexión con Mongoose
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("Error de conexión a MongoDB:", error);
});

db.once("open", () => {
  console.log("Conexión exitosa a MongoDB con Mongoose!");
});

// Conexión con MongoClient
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Conectar el cliente al servidor (opcional a partir de la v4.7)
    await client.connect();
    // Enviar un ping para confirmar una conexión exitosa
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    console.error("Error conectando a MongoDB con MongoClient:", error);
  } finally {
    // Asegura que el cliente se cierre cuando termines/error
    await client.close();
  }
}

run().catch(console.dir);

module.exports = mongoose;
