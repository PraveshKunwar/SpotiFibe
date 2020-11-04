import React, { Component } from "react";
import { Animated } from "react-animated-css";
import style from "./index.css";
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
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={logo} />
              <Card.Body className>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
            <Button variant="warning" size="lg" className="btn">
              <a href="/convert">Start Converting</a>
            </Button>
            <br></br>
            <Button variant="danger" size="lg" className="btn-2">
              <a href="/about">About SpotiFibe</a>
            </Button>
          </div>
        </Animated>
        <Animated animationIn="fadeIn" animationInDelay="3000" isVisible={true}>
          <div className="grid-container">
            <div className="one">
              <br></br>
              <h3>
                <b>
                  {" "}
                  Q: What is <i>SpotiFibe?</i>
                </b>
              </h3>
              <br></br>
              <p>
                A: Welcome to <b>SpotiFibe</b>! This website allows you to
                convert Spotify playlists into one's for YouTube! Check out
                Convert page to easily start converting them into one another!
                Enjoy! :)
              </p>
            </div>
            <div className="two">
              <br></br>
              <h3>
                <b>Q: How are they converted into one another?</b>
              </h3>
              <br></br>
              <p>
                A: Simple! Using Spotify's Web API, we used Node.JS to access
                all of your playlists, and used YouTube's API to convert them
                into the new YouTube playlists! Cool, right!
              </p>
            </div>
            <div className="three">
              <br></br>
              <h3>
                <b>Q: Sweet! Where can I start converting?</b>
              </h3>
              <br></br>
              <p>
                To get started, click the button down below! Make sure to login
                into your YouTube and Spotify accounts for authorization! The
                Playlist will be shown on your YouTube account once done!
              </p>
            </div>
          </div>
        </Animated>
      </div>
    );
  }
}

export default Home;
