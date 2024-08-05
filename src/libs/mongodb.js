// libs/mongodb.js
const { config } = require("../config/config");
const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = config.uri;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
  } catch (error) {
    console.error("Error connecting to MongoDB with MongoClient:", error);
  } finally {
    await client.close();
  }
}

async function getComentarios() {
  try {
    await client.connect();
    const db = await client.db("comentarios");
    const collection = await db.collection("resenias");
    return { client, db, collection };
  } catch (error) {
    console.error("Error getting comentarios collection:", error);
    throw error;
  }
}

module.exports = { run, getComentarios };
