const mongoose = require("mongoose");
const { config } = require("../config/config");
const setupModel = require("./../db/models/reseña.model");

const mongoUri = config.uri;

async function connectToDatabase() {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    console.log("Conexión a la base de datos exitosa");

    setupModel(mongoose);
  } catch (error) {
    console.error("Error al conectar a la base de datos: ", error);
  }
}

connectToDatabase();

module.exports = mongoose;
