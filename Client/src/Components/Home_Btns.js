import { Button } from "react-bootstrap";
import style from "./Sections.css";

function Home_Btns() {
  return (
    <div className="btn" style={style}>
      <button className="start-btn">
        <a href="/convert">Start Converting!</a>
      </button>
    </div>
  );
}

export default Home_Btns;
