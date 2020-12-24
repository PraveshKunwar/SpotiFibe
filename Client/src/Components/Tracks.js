import React from "react";
import axios from "axios";
import { Animated } from "react-animated-css";
import style from "./Tracks.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Tracks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
      value: this.props.value,
      token: this.props.token,
      id: "",
      tracks: [],
      trackName: [],
      text: "Submit tracks here!",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log(this.state.items);
    const filterArr = this.state.items.filter(
      (item) => item.name === this.state.value
    );
    const getId = filterArr[0].id;
    console.log(filterArr);
    fetch(`https://api.spotify.com/v1/playlists/${getId}/tracks`, {
      headers: {
        Authorization: "Bearer " + this.state.token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.items);
        this.setState({ tracks: data.items });
      });
  }
  handleSubmit() {
    return axios
      .post("/api/tracks", {
        trackNames: this.state.tracks.map((track) => {
          return track.track !== null ? track.track.name : false;
        }),
      })
      .then((res) => console.log(res))
      .then(this.setState({ text: "Completion! ✔" }))
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div className="tracks" style={style}>
        <Animated isVisible={true} animationInDelay="1000" animationIn="fadeIn">
          <h1>{this.state.value}</h1>
          <div className="button-div">
            <Link to="https://localhost:5000/auth/youtube">
              <Button
                onClick={this.handleClick}
                className="youtube-btn"
                variant="danger"
              >
                Log in with YouTube
              </Button>
            </Link>
            <br></br>
            <Button
              onClick={this.handleSubmit}
              className="youtube-btn submit"
              variant="success"
            >
              {this.state.text}
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
