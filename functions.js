require("dotenv").config();
const { google } = require("googleapis");
const scopes = "https://www.googleapis.com/auth/youtube";

const oauth2Client = new google.auth.OAuth2(
  process.env.YOUTUBE_CLIENT_ID,
  process.env.YOUTUBE_CLIENT_SECRET,
  process.env.YOUTUBE_REDIRECT
);

const url = oauth2Client.generateAuthUrl({
  access_type: "offline",
  scope: scopes,
});

const { tokens } = oauth2Client.getToken(code);
oauth2Client.setCredentials(tokens);

oauth2Client.on("tokens", (tokens) => {
  if (tokens.refresh_token) {
    console.log(tokens.refresh_token);
  }
  console.log(`Access token!  - ${tokens.access_token}`);
});
