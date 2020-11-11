import React, { useState, useEffect } from "react";
import style from "./Home.css";
import { Animated } from "react-animated-css";
import { SpotifyToken } from "./Spotify";

import Conversion from "./Successful";
import Login from "./LoginPage";
import LandingHeader from "./LandingHeader";
import ImgGrid from "./ImgGrid";
import Banner from "../Images/spotifibe-cover.jpg";

function Home() {
  const [token, setToken] = useState(" ");

  useEffect(() => {
    const hash = SpotifyToken();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
    }
  }, []);

  return token !== " " ? (
    <Conversion />
  ) : (
    <div className="home">
      <img className="banner" src={Banner}></img>
      <Animated isVisible={true} animationInDelay="1000" animationIn="fadeIn">
        <LandingHeader />
      </Animated>
      <Animated isVisible={true} animationInDelay="2000" animationIn="fadeIn">
        <ImgGrid />
      </Animated>
      <Animated isVisible={true} animationInDelay="3000" animationIn="fadeIn">
        <Login />
      </Animated>
    </div>
  );
}

export default Home;
