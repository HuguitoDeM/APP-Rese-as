const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { config } = require("dotenv");
const db = mongoose.connection;
const app = express();

const port = 3000;

app.use(bodyParser.json());

mongoose.connect(config.uri);
