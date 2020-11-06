import Dropdown from "../Sections.css";
import { Link } from "react-router-dom";

function LearnMore() {
  return (
    <button className="learnMore-btn" style={Dropdown}>
      <a href="#section-two">Learn More ⬇</a>
    </button>
  );
}

export default LearnMore;
