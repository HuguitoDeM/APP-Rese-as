const { config } = require("../config/config");
const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = config.uri;

// Configuración y conexión con MongoClient
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
    await listDatabases(client);
  } catch (error) {
    console.error("Error conectando a MongoDB con MongoClient:", error);
  } finally {
    await client.close();
  }
}
run().catch(console.error);

async function listDatabases(client) {
  databaseList = await client.db().admin().listDatabases();
  console.log("databases: ");
  databaseList.databases.forEach((element) => console.log(`- ${element.name}`));
}
