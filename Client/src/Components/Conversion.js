import React, { useState, useEffect } from "react";
import LoginBtns from "./LoginBtns";
import { Animated } from "react-animated-css";
import style from "./Conversion.css";
import fetch from "node-fetch";
import Playlists from "./Spotify-Components/Playlists";
import ProfileHolder from "../Images/spotifylogo.png";

const Successful = (props) => {
  const [name, setName] = useState("User");
  const [profileImage, setProfileImage] = useState(ProfileHolder);
  const [profileUrl, setProfileUrl] = useState("");
  const [playlistItems, setPlaylistItems] = useState([]);
  useEffect(() => {
    fetch("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: "Bearer " + props.token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setName(data.display_name);
        setProfileImage(data.images[0].url);
        setProfileUrl(data.external_urls.spotify);
      })
      .catch((err) => console.error(err));
    fetch("https://api.spotify.com/v1/me/playlists", {
      headers: {
        Authorization: "Bearer " + props.token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPlaylistItems(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="successful" style={style}>
      <Animated isVisible={true} animationInDelay="1000" animationIn="fadeIn">
        <div className="fetched-header">
          <h1>Welcome {name}.</h1>
        </div>
      </Animated>
      <Animated isVisible={true} animationInDelay="2000" animationIn="fadeIn">
        <div className="profile">
          <a href={profileUrl}>
            <img className="profile-image" src={profileImage}></img>
          </a>
        </div>
        <hr></hr>
      </Animated>
      <Animated isVisible={true} animationInDelay="3000" animationIn="fadeIn">
        <div className="playlists"></div>
      </Animated>
    </div>
  );
};

export default Successful;
