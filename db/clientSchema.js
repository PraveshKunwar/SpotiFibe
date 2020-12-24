const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  _id: String,
  access_token: String,
  refresh_token: String,
  name: String,
});

module.exports = clientSchema;
