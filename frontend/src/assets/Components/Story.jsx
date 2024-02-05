import "./story.css";

const Story = () => {
  return (
    <div className="mission-story-section">
      {/* Our Mission Subsection */}
      <div className="subsection mission">
        <div className="content">
          <h2 className="heading">Our Mission</h2>
          <p className="description">
            &quot; At Eventio, our mission is to simplify event <br /> planning
            through seamless venue <br /> booking. We strive to empower
            individuals <br /> and businesses by offering a diverse <br /> range
            of spaces, ensuring every event is a <br /> success. &quot;
          </p>
        </div>
        <img
          src="https://i.pinimg.com/236x/65/6d/41/656d41426bc16d1bba435e1c6bf8cdd6.jpg"
          alt="Our Mission"
          className="image"
        />
      </div>

      {/* Our Story Subsection */}
      <div className="subsection story">
        <img
          src="https://i.pinimg.com/236x/17/68/8f/17688f1454faf47dbad398b9bab98349.jpg"
          alt="Our Story"
          className="image"
        />
        <div className="content">
          <h2 className="heading">Our Story</h2>
          <p className="description">
            &quot; At Eventio, we started with a simple idea – to make <br />{" "}
            event planning easy for everyone. Faced with the <br /> struggles of
            finding the right venue ourselves, we set <br /> out to create a
            platform that connects event <br /> organizers with the perfect
            spaces. Eventio is all about <br />
            making your event planning experience stress-free <br /> and
            enjoyable. Our goal is to revolutionize the way <br /> people plan
            and celebrate events, one easy booking <br /> at a time. &quot;
          </p>
        </div>
      </div>
    </div>
  );
};

export default Story;
