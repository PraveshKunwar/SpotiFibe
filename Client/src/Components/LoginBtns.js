import style from "./LoginBtns.css";
import React from "react";
import { Button } from "react-bootstrap";
import { accessUrl } from "./Spotify";

class LoginBtns extends React.Component {
  render() {
    return (
      <div>
        <div className="spotify-login">
          <Button variant="success" style={style} className="spotify-btn">
            <a href={accessUrl} style={{ color: "#f1ffff", fontWeight: "600" }}>
              Log in with Spotify
            </a>
          </Button>
          <br></br>
        </div>
      </div>
    );
  }
}

export default LoginBtns;
