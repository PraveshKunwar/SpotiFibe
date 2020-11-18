require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;
const cors = require("cors");
let querystring = require("querystring");
const request = require("request");
const { post } = require("request");
const redirect_uri =
  process.env.redirect_uri || `http://localhost:${PORT}/callback`;

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const scopes =
  "ugc-image-upload user-read-recently-played user-top-read user-read-playback-position user-read-playback-state user-modify-playback-state user-read-currently-playing user-read-currently-playing streaming playlist-modify-publicplaylist-modify-private playlist-read-private playlist-read-collaborative user-follow-modify user-follow-read user-library-modify user-library-read user-read-email user-read-private";

app.use(cors());

app.get("/callback", (req, res) => {
  let returnedCode = req.query.code;
  let options = {
    url: "https://accounts.spotify.com/api/token",
    form: {
      code: returnedCode,
      redirect_uri,
      grant_type: "authorization_code",
    },
    headers: {
      Authorization:
        "Basic " +
        new Buffer.from(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64"),
    },
    json: true,
  };
  request.post(options, (err, response, body) => {
    let uri = "http://localhost:3000";
    res.redirect(`${uri}`);
  });
});
app.listen(PORT, console.log(`Listening to ${PORT}`));
