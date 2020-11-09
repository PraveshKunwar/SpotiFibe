import React from "react";
import style from "./Home.css";
import Cover1 from "../Images/cover1.jpg";
import Cover2 from "../Images/cover2.jpg";
import Cover3 from "../Images/cover3.jpg";

function ImgGrid() {
  return (
    <div className="Img-Grid" style={style}>
      <div>
        <img src={Cover1} alt="Spotify Cover"></img>
      </div>
      <div>
        <img src={Cover2} alt="Spotify Cover"></img>
      </div>
      <div>
        <img src={Cover3} alt="Spotify Cover"></img>
      </div>
    </div>
  );
}

export default ImgGrid;
