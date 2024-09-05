const express = require("express");
const fs = require("fs");

const app = require("./app");

const server = express();

// Load file config.json
const file = fs.readFileSync("./config.json");
const config = JSON.parse(file);

// Initiate config
app.init(server, config);

server.listen(config.server.port, function(err) {
  if (err) throw err;
  console.log(`Server is running ${config.server.port}`);
});