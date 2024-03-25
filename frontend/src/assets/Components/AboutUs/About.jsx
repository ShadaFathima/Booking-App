/* eslint-disable react/prop-types */
import "./about.css";

const AboutUs = ({ aboutUsRef }) => (
  <section ref={aboutUsRef} className="about-us">
    <h1 className="heading">ABOUT US</h1>
    <p className="paragraph">
      Eventio: Your go-to for hassle-free event and meeting venue bookings.{" "}
      <br />
      Explore a diverse range of spaces, from grand ballrooms to intimate
      meeting <br /> rooms. Simplify your event planning with our seamless
      platform, creating <br /> memorable experiences effortlessly.
    </p>
  </section>
);

export default AboutUs;
