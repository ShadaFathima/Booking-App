import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./review.css";

const Review = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/submit-feedback/"
        );
        setFeedbacks(response.data);
      } catch (error) {
        console.error("Error fetching feedbacks:", error);
      }
    };

    fetchFeedbacks();
  }, []);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    let animationFrameId;

    const smoothScroll = (target, duration, direction) => {
      const start = target.scrollLeft;
      const distance =
        direction === "left"
          ? target.querySelector(".review-card").offsetWidth
          : target.scrollWidth - target.clientWidth;
      const startTime = performance.now();

      const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

      const scroll = (currentTime) => {
        const timeElapsed = currentTime - startTime;
        const normalizedTime = timeElapsed / duration;

        target.scrollLeft = start + distance * easeInOutQuad(normalizedTime);

        if (timeElapsed < duration) {
          animationFrameId = requestAnimationFrame(scroll);
        }
      };

      scroll(start);
    };

    const scrollWithAnimation = (direction) => {
      const cardWidth =
        scrollContainer.querySelector(".review-card").offsetWidth;
      smoothScroll(scrollContainer, cardWidth, direction); // Scroll one card width at a time
    };

    const intervalId = setInterval(() => {
      scrollWithAnimation("left"); // Always scroll to the left for infinite scrolling
    }, 4000); // 5 seconds interval

    return () => {
      clearInterval(intervalId);
      cancelAnimationFrame(animationFrameId);
    };
  }, [feedbacks]); // Add feedbacks dependency to rerun effect when new feedbacks are added

  const addNewFeedback = (newFeedback) => {
    // Add new feedback to the beginning of the array
    setFeedbacks([newFeedback, ...feedbacks]);
    // After adding a new feedback, scroll to the left to show the new one
    scrollWithAnimation("left");
  };

  return (
    <section className="bg-gray-200">
      <div className="mx-auto max-w-screen-xl px-8 py-12 sm:px-8 lg:px-10 lg:py-16">
        <h2 className="text-center text-4xl tracking-tight text-gray-900 sm:text-5xl mt-4 relative">
          <span className="relative">
            What Our Clients Say
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-black"></span>
          </span>
        </h2>

        <div className="mt-8 flex overflow-x-auto" ref={containerRef}>
          <div className="flex gap-4">
            {feedbacks.map((feedback, index) => (
              <blockquote
                key={index}
                className="review-card rounded-lg bg-white p-4 sm:p-6 w-80 h-64 shadow-md"
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
      </div>
    </section>
  );
};

export default Review;

// import { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import "./review.css";

// const Review = () => {
//   const [feedbacks, setFeedbacks] = useState([]);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const fetchFeedbacks = async () => {
//       try {
//         const response = await axios.get("http://127.0.0.1:8000/submit-feedback/");
//         setFeedbacks(response.data);
//       } catch (error) {
//         console.error("Error fetching feedbacks:", error);
//       }
//     };

//     fetchFeedbacks();
//   }, []);

//   useEffect(() => {
//     const scrollContainer = containerRef.current;
//     let animationFrameId;

//     const smoothScroll = (target, duration) => {
//       const start = target.scrollLeft;
//       const distance = target.scrollWidth - target.clientWidth;
//       const startTime = performance.now();

//       const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

//       const scroll = (currentTime) => {
//         const timeElapsed = currentTime - startTime;
//         const normalizedTime = timeElapsed / duration;

//         target.scrollLeft = start + distance * easeInOutQuad(normalizedTime);

//         if (timeElapsed < duration) {
//           animationFrameId = requestAnimationFrame(scroll);
//         }
//       };

//       scroll(start);
//     };

//     const scrollWithAnimation = () => {
//       smoothScroll(scrollContainer, 1000); // Adjust the duration as needed
//     };

//     const intervalId = setInterval(scrollWithAnimation, 5000); // 3 seconds interval

//     return () => {
//       clearInterval(intervalId);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return (
//     <section className="bg-gray-200">
//       <div className="mx-auto max-w-screen-xl px-8 py-12 sm:px-8 lg:px-10 lg:py-16">
//         <h2 className="text-center text-4xl tracking-tight text-gray-900 sm:text-5xl mt-4 relative">
//           <span className="relative">
//             What Our Clients Say
//             <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-black"></span>
//           </span>
//         </h2>

//         <div className="mt-8 flex overflow-x-auto" ref={containerRef}>
//           <div className="flex gap-4">
//             {feedbacks.map((feedback, index) => (
//               <blockquote
//                 key={index}
//                 className="rounded-lg bg-white p-4 sm:p-6 w-80 h-64 shadow-md"
//               >
//                 <p className="mt-2 text-gray-700">
//                   <span className="text-gray-500">&ldquo;</span>
//                   {feedback.text}
//                   <span className="text-gray-500">&rdquo;</span>
//                 </p>
//               </blockquote>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Review;
