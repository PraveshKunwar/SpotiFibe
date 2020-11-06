import landing from "../Sections.css";
import { Animated } from "react-animated-css";
import LearnMore from "./LearnMore";

function SectionOne() {
  return (
    <section className="landing section-one" style={landing}>
      <Animated animationIn="fadeIn" animationInDelay="1000" isVisible={true}>
        <h1>Welcome to SpotiFibe.</h1>
        <h2>
          The ultimate Spotify to <br></br>YouTube Playlist Converter!
        </h2>
      </Animated>
      <LearnMore />
    </section>
  );
}

export default SectionOne;
