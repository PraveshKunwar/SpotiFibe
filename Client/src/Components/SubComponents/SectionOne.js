import landing from "../Sections.css";
import { Animated } from "react-animated-css";
import LearnMore from "./LearnMore";
import LandingGrid from "./LandingGrid";

function SectionOne() {
  return (
    <section className="landing section-one" style={landing}>
      <Animated animationIn="fadeIn" animationInDelay="1000" isVisible={true}>
        <h1 id="header-1">Welcome to SpotiFibe.</h1>
        <h2 id="header-2">
          The ultimate Spotify to Youtube playlist converter.
        </h2>
      </Animated>
      <Animated animationIn="fadeIn" animationInDelay="2000" isVisible={true}>
        <LandingGrid />
      </Animated>
      <LearnMore />
    </section>
  );
}

export default SectionOne;
