// import React from "react";
import "./feedback.css";

const Feedback = () => {
  return (
    <div className="feedback-section">
      <p>
        &quot;We value your experience! Please take a <br /> moment to share
        your thoughts and leave a <br /> review for Team Eventio.&quot;
      </p>
      <div className="feedback-form">
        <input
          type="text"
          className="form-input"
          placeholder="Share your experience"
        />
        <button type="button" className="submit-button">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Feedback;
