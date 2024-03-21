import React, { useState } from "react";
import axios from "axios"; // Import Axios
import "./feedback.css";

const Feedback = () => {
  const [feedback, setFeedback] = useState(""); // State variable to store feedback

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/submit-feedback/", { text: feedback }); // Send POST request using Axios
      if (response.status === 200) {
        alert("Feedback submitted successfully");
        setFeedback(""); // Clear input field after successful submission
      } else {
        alert("Failed to submit feedback");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("An error occurred while submitting feedback");
    }
  };
  
  

  return (
    <div className="feedback-section bg-gray-800 text-white text-center py-5 px-4 md:px-8 mt-8 mb-20">
      <p>
        &quot;We value your experience! Please take a <br /> moment to share
        your thoughts and leave a <br /> review for Team Eventio.&quot;
      </p>
      <div className="feedback-form max-w-md mx-auto py-4 px-8 bg-gray-100 rounded-lg">
        <input
          type="text"
          className="form-input w-full py-3 px-4 mb-4 rounded-full"
          placeholder="Share your experience"
          value={feedback} // Bind value to feedback state variable
          onChange={(e) => setFeedback(e.target.value)} // Update feedback state on change
        />
        <button
          type="button"
          className="submit-button bg-black text-white py-3 px-6 rounded-full"
          onClick={handleSubmit} // Call handleSubmit function on button click
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Feedback;
