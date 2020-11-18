import React, { useState, useEffect } from "react";
import { Animated } from "react-animated-css";
import { SpotifyToken } from "./Spotify";
import Conversion from "./Conversion";
import Login from "./LoginPage";
import LandingHeader from "./LandingHeader";
import ImgGrid from "./ImgGrid";

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
    <Conversion token={token} />
  ) : (
    <div className="home">
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
