import React, { useState, useEffect } from "react";
import axios from "axios";
import "./review.css";
const Review = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/submit-feedback/"); // Adjust the endpoint URL
        setFeedbacks(response.data);
        console.log(feedbacks);
      } catch (error) {
        console.error("Error fetching feedbacks:", error);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <section className="bg-gray-200">
      <div className="mx-auto max-w-screen-xl px-8 py-12 sm:px-8 lg:px-10 lg:py-16">
        <h2 className="text-center text-4xl tracking-tight text-gray-900 sm:text-5xl mt-4">
          What Our Clients Say
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-0">
          {feedbacks.map((feedback, index) => (
            <blockquote
              key={index}
              className="rounded-lg bg-white p-4 sm:p-6 w-full md:w-72 shadow-md"
            >
              <p className="mt-2 text-gray-700">
                <span className="text-gray-500">&ldquo;</span>
                {feedback.text}
                <span className="text-gray-500">&rdquo;</span>
              </p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
