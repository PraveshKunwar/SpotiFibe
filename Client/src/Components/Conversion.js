import React from "react";
import { Animated } from "react-animated-css";
import style from "./Conversion.css";
import fetch from "node-fetch";
import ProfileHolder from "../Images/spotifylogo.png";

class Successful extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "User",
      profileUrl: false,
      profileImage: <ProfileHolder />,
      token: this.props.token,
      items: [],
    };
  }
  componentDidMount() {
    document.title = "Convert | SpotiFibe";
    fetch("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: "Bearer " + this.state.token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          name: data.display_name,
          profileUrl: data.external_urls.spotify,
          profileImage: data.images[0].url,
        });
      })
      .catch((err) => console.error(err));
    fetch("https://api.spotify.com/v1/me/playlists?limit=50", {
      headers: {
        Authorization: "Bearer " + this.state.token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          items: data.items,
        });
        this.state.items.map((x) => {
          console.log(x.name); // returns all the names of the playlists
        });
      })

      .catch((err) => console.error(err));
  }
  render() {
    return (
      <div className="successful" style={style}>
        <Animated isVisible={true} animationInDelay="1000" animationIn="fadeIn">
          <div className="fetched-header">
            <h1>Welcome {this.state.name}.</h1>
          </div>
        </Animated>
        <Animated isVisible={true} animationInDelay="2000" animationIn="fadeIn">
          <div className="profile">
            <a href={this.state.profileUrl} target="_blank">
              <img
                className="profile-image"
                src={this.state.profileImage}
              ></img>
            </a>
          </div>
          <hr></hr>
        </Animated>
        <Animated isVisible={true} animationInDelay="3000" animationIn="fadeIn">
          <h2>Playlists</h2>
          <div className="playlists">
            {this.state.items.map((item) => {
              return (
                <div>
                  <img src={item.images[0].url}></img>
                  <p className="playlists-text">{item.name}</p>
                </div>
              );
            })}
          </div>
        </Animated>
      </div>
    );
  }
}

export default Successful;
