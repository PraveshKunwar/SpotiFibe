import React from "react";
import { Animated } from "react-animated-css";
import style from "./Conversion.css";
import fetch from "node-fetch";
import ProfileHolder from "../Images/spotifylogo.png";
import Dropdown from "react-bootstrap/Dropdown";
import { Button } from "react-bootstrap";
class Successful extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "User",
      profileUrl: false,
      profileImage: <ProfileHolder />,
      token: this.props.token,
      items: [],
      clicked: false,
      value: "Select Playlist",
    };
    this.handleChange = this.handleChange.bind(this);
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
      })

      .catch((err) => console.error(err));
  }

  handleChange(event) {
    this.setState({ value: event.target.name });
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
            <a href={this.state.profileUrl} target="_blank" rel="noreferrer">
              <img
                className="profile-image"
                src={this.state.profileImage}
                alt="profile"
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
                  <img src={item.images[0].url} alt={item.name}></img>
                  <p className="playlists-text">{item.name}</p>
                </div>
              );
            })}
          </div>
        </Animated>
        <Animated isVisible={true} animationInDelay="3000" animationIn="fadeIn">
          <div className="playlists-check">
            <Dropdown
              style={style}
              className="dropdown"
              id="dropdown-button-drop-down"
              title="Dropdown button"
            >
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className="dropdown-toggle"
              >
                {this.state.value}
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu">
                {this.state.items.map((item) => {
                  return (
                    <Dropdown.Item
                      name={item.name}
                      eventKey={item.id}
                      className="dropdown-item"
                      onClick={this.handleChange}
                    >
                      {item.name}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
            {this.state.value === "Select Playlist" ? (
              false
            ) : (
              <div class="youtube-btn">
                <Button
                  classname="youtube"
                  style={{
                    color: "white",
                    padding: "20px",
                    borderRadius: "99px",
                    background: "#FF0000",
                  }}
                >
                  <a href="https://www.google.com/" style={{ color: "white" }}>
                    Start Converting!
                  </a>
                </Button>
              </div>
            )}
          </div>
        </Animated>
      </div>
    );
  }
}

export default Successful;
