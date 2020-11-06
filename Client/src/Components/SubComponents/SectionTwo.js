import section_two from "../Sections.css";
import { Animated } from "react-animated-css";

function SectionTwo() {
  return (
    <section className="section-two" style={section_two} id="section-two">
      <Animated animationIn="fadeIn" animationInDelay="1000" isVisible={true}>
        <h1>lorem80</h1>
        <p>asd</p>
      </Animated>
    </section>
  );
}

export default SectionTwo;
