const express = require("express");
const accountRouter = require("../router/accountsRouter");

const db = require("../data/dbConfig.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send("hello world!");
});

server.use("/accounts", accountRouter);

module.exports = server;
