import React, { Component } from "react";
import style from "./Home.css";
import { Animated } from "react-animated-css";

import Successful from "./Successful";
import Login from "./LoginPage";
import LandingHeader from "./LandingHeader";
import ImgGrid from "./ImgGrid";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { token: " " };
  }
  render() {
    if ((this.state.token = " ")) {
      return (
        <div className="home">
          <Animated
            isVisible={true}
            animationInDelay="1000"
            animationIn="fadeIn"
          >
            <LandingHeader />
          </Animated>
          <Animated
            isVisible={true}
            animationInDelay="2000"
            animationIn="fadeIn"
          >
            <ImgGrid />
          </Animated>
          <Animated
            isVisible={true}
            animationInDelay="3000"
            animationIn="fadeIn"
          >
            {this.state.token === " " ? <Login /> : <Successful />}
          </Animated>
        </div>
      );
    } else if (this.state.token !== " ") {
      return (
        <div className="home">
          <Successful />
        </div>
      );
    }
  }
}

export default Home;
