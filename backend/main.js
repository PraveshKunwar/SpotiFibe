const express = require("express");
const bodyParser = require("body-parser");
const PORT = 5000;
const cors = require("cors");
let querystring = require("querystring");
const request = require("request");
const redirect_uri =
  process.env.redirect_uri || "http://localhost:5000/callback";
require("dotenv").config();

app.listen(PORT, console.log(`Listening to ${PORT}`));
