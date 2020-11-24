import React from "react";
import fetch from "node-fetch";
import { Animated } from "react-animated-css";
import style from "./Tracks.css";
import { Button } from "react-bootstrap";

import axios from "axios";

class Tracks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
      value: this.props.value,
      token: this.props.token,
      id: "",
      tracks: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const filterArr = this.state.items.filter(
      (item) => item.name === this.state.value
    );
    const getId = filterArr[0].id;
    fetch(`https://api.spotify.com/v1/playlists/${getId}/tracks`, {
      headers: {
        Authorization: "Bearer " + this.state.token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ tracks: data.items });
      });
  }

  handleClick() {
    fetch("https://localhost:5000/data", {
      method: "POST",
      body: JSON.stringify({
        tracks: this.state.tracks,
        items: this.state.items,
        value: this.state.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  render() {
    return (
      <div className="tracks" style={style}>
        <Animated isVisible={true} animationInDelay="1000" animationIn="fadeIn">
          <h1>{this.state.value}</h1>
          <div className="button-div">
            <Button
              onClick={this.handleClick}
              className="youtube-btn"
              variant="danger"
            >
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noreferrer"
              >
                Log in with YouTube
              </a>
            </Button>
          </div>
        </Animated>
        <div className="tracks-images" style={style}>
          {this.state.tracks.map((track, id) => {
            return (
              <div className="image-flex-track">
                {track.track !== null ? (
                  <img
                    src={track.track.album.images[0].url}
                    alt={track.track.name}
                  />
                ) : (
                  false
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Tracks;
