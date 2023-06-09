const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/boson");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to Mongodb"));

db.once("open", function () {
  console.log("connected to database:: Mongodb");
});

module.exports = db;
