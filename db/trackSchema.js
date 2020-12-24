const mongoose = require("mongoose");

const trackSchema = new mongoose.Schema({
  _id: { type: String, unique: true },
  trackNames: Object,
  playlistName: String,
});

export default trackSchema;
