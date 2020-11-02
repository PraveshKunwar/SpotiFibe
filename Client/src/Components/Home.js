import React, { Component } from "react";
import { Animated } from "react-animated-css";
import style from "./index.css";
import { Button } from "react-bootstrap";
import SpotiFibe from "../Images/spotifibe-cover.jpg";

class Home extends Component {
  render() {
    return (
      <div className="home" style={style}>
        <Animated
          animationIn="fadeIn"
          animationInDelay="1000"
          animationOut="fadeOut"
          isVisible={true}
        >
          <div className="main" style={style}>
            <h2>
              The ultimate Spotify to <br></br>YouTube Playlist Converter!
            </h2>
            <button variant="success" className="conversion">
              <a href="/convert">Let's Convert!</a>
            </button>
            <br></br>
            <br></br>
            <button variant="success" className="about-btn">
              <a href="/about">About SpotiFibe.</a>
            </button>
          </div>
        </Animated>
        <Animated animationIn="fadeIn" animationInDelay="3000" isVisible={true}>
          <div className="container" style={style}>
            <div className="1">
              <h3>Headers</h3>
              <p>asdjkhasjkdh</p>
            </div>
            <div className="2">
              <h3>Headers</h3>
              <p>asdjkhasjkdh</p>
            </div>
            <div className="3">
              <h3>Headers</h3>
              <p>asdjkhasjkdh</p>
            </div>
          </div>
        </Animated>
      </div>
    );
  }
}

export default Home;
