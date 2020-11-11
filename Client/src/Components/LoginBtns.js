import style from "./LoginBtns.css";
import React from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

class LoginBtns extends React.Component {
  constructor(props) {
    super(props);
    this.state = [
      { Spotify: "Log in with Spotify" },
      { Youtube: "Log in with Youtube." },
      { tokenSpotify: " " },
    ];
  }
  componentDidMount() {
    axios.get("/callback").then((res) => console.log(res));
  }
  render() {
    return (
      <div>
        <div>
          <Button variant="success" style={style} className="spotify-btn">
            <a
              href="http://localhost:5000/auth/spotify"
              style={{ color: "#f1ffff", fontWeight: "600" }}
            >
              {this.state[0].Spotify}
            </a>
          </Button>
          <br></br>
          <Button variant="danger" style={style} className="youtube-btn">
            {this.state[1].Youtube}
          </Button>
        </div>
      </div>
    );
  }
}

export default LoginBtns;
