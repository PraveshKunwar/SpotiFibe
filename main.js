require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;
const cors = require("cors");
const request = require("request");
const redirect_uri =
  process.env.redirect_uri || `http://localhost:${PORT}/callback`;
app.use(cors({ origin: true, credentials: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
const urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use(urlencodedParser);
app.use(bodyParser.json());
app.use(express.json());

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

//API endpoints

//google authentication and playlist conversion process

const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const mongoose = require("mongoose");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const session = require("express-session");
const clientSchema = require("./db/clientSchema");

const secrets = {
  clientID: process.env.YOUTUBE_CLIENT_ID,
  clientSecret: process.env.YOUTUBE_CLIENT_SECRET,
  callbackURL: `https://localhost:${PORT}/auth/google`,
};

const db = mongoose.connect();
const User = db.model("User", clientSchema);

//passport auth using google strategy
passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: secrets.clientID,
      clientSecret: secrets.clientSecret,
      callbackUrl: secrets.callbackURL,
    },
    function (accessToken, refreshToken, profile, done) {
      process.nextTick(() => {
        User.findOne({ _id: profile.id }, (err, res) => {
          err ? done(err) : false;
          if (res) {
            console.log("User is available.");
            return done(null, res);
          } else {
            console.log("New user");
            const user = new User({
              _id: profile.id,
              access_token: accessToken,
              refresh_token: refreshToken,
              name: profile.displayName,
            });
          }
        });
      });
    }
  )
);

const userLogged = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
};

app.use(session({ secret: "secret" }));
app.use(passport.initialize());
app.use(passport.session());

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "https://www.googleapis.com/auth/youtube"],
    accessType: "offline",
  })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/profile",
    failureRedirect: "/",
  })
);

app.get("/profile", userLogged, (req, res) => {
  console.log(req.user);
  const oauth2Client = new OAuth2(
    secrets.clientID,
    secrets.clientSecret,
    secrets.callbackURL
  );
  oauth2Client.credentials = {
    access_token: req.user.access_token,
    refresh_token: req.user.refresh_token,
  };
  google
    .youtube({
      version: "v3",
      auth: oauth2Client,
    })
    .subscriptions.list(
      {
        part: "snippet",
        mine: true,
        headers: {},
      },
      function (err, data, response) {
        if (err) {
          console.error("Error: " + err);
          res.json({
            status: "error",
          });
        }
        if (data) {
          console.log(data);
          res.json({
            status: "ok",
            data: data,
          });
        }
        if (response) {
          console.log("Status code: " + response.statusCode);
        }
      }
    );
});

app.post("/api/tracks", (req, res) => {
  console.log(req.body);
});

app.listen(PORT, console.log(`Listening to ${PORT}`));
