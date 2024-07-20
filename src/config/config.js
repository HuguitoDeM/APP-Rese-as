require("dotenv").config();

const config = {
  port: process.env.PORT || 3000,
  dbUser: process.env.MONGODB_USER,
  uri: process.env.MONGODB_URI,
  dbPassword: Process.env.MONGODB_PASS,
  dbName: process.env.MONGODB_DB,
};

module.exports = { config };
