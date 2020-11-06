import { Card } from "react-bootstrap";
import logo from "../Images/pic.jpg";
import style from "./Home.css";

function Cards() {
  return (
    <Card className="card" style={style}>
      <Card.Img variant="top" src={logo} style={style} className="card-img" />
      <Card.Body>
        <Card.Title>Pravesh Kunwar</Card.Title>
        <Card.Subtitle>Owner of SpotiFibe.</Card.Subtitle>
        <br></br>
        <Card.Text className="card-text">
          Hi, I am Pravesh Kunwar, owner and creator of SpotiFibe! If you would
          like to get in touch with me, please check out my Linktree{" "}
          <a className="card-link" href="https://linktr.ee/PraveshK">
            here!
          </a>{" "}
          Thank you, and lets convert some playlists shall we?
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;
