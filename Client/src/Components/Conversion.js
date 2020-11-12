import React, { useState, useEffect } from "react";
import LoginBtns from "./LoginBtns";
import { Animated } from "react-animated-css";
import style from "./Conversion.css";
import fetch from "node-fetch";
import Playlists from "./Spotify-Components/Playlists";

const Successful = (props) => {
  const [name, setName] = useState("Welcome User.");
  const [profileImage, setProfileImage] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const [playlistName, setPlaylistName] = useState("");
  const [playlistId, setPlaylistId] = useState("");
  const [playlistImage, setPlaylistImage] = useState("");
  const [playlistDescription, setPlaylistDescription] = useState("");
  const [playlistUrl, setPlaylistUrl] = useState("");
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
        data.items.map((item) => {
          setPlaylistName(item.name);
          setPlaylistId(item.id);
          item.images.map((img) => setPlaylistImage(img.url));
          item.description !== ""
            ? setPlaylistDescription(item.description)
            : setPlaylistDescription("No Description.");
          setPlaylistUrl(item.external_urls.spotify);
        });
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
        <div className="playlists">
          <Playlists token={props.token} />
        </div>
      </Animated>
    </div>
  );
};

export default Successful;
