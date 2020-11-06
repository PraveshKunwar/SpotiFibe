import React, { Component } from "react";
import style from "./Home.css";
import { Button, Card } from "react-bootstrap";
import { Container, Notification } from "react-bulma-components";
import SpotiFibe from "../Images/spotifibe-cover.jpg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
//import Cards from "./Cards";
import Home_Btns from "./Home_Btns";
import SectionOne from "./SubComponents/SectionOne";
import SectionTwo from "./SubComponents/SectionTwo";

class Home extends Component {
  render() {
    return (
      <div className="home" style={style}>
        <div class="main" style={style}>
          <SectionOne />
          <SectionTwo />
        </div>
      </div>
    );
  }
}

export default Home;
