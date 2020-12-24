const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  _id: { type: String, unique: true },
  access_token: String,
  refresh_token: String,
  name: String,
});

module.exports = clientSchema;
