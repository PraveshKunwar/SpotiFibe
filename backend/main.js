const express = require("express");
const bodyParser = require("body-parser");
const PORT = 5000;
const cors = require("cors");

const app = express();
app.use(cors());
app.get("/auth/spotify", (req, res) => {
  res.send("akdjaklsdjsakld");
});
app.listen(PORT, console.log(`Listening to ${PORT}`));
