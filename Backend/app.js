const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectToDataBase = require("./db/db");
connectToDataBase();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world");
});

module.exports = app;
