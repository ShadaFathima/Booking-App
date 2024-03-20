import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const VenueCard = ({ image, title, description, payment }) => {
  return (
    <div className="h-[375px] w-[300px] bg-white rounded-md shadow-md overflow-hidden transition-transform ease-in-out duration-300 transform hover:scale-105 mx-4">
      <div className="h-[375px] bg-white rounded-xl shadow-md overflow-hidden">
        <div className="rounded-t-xl overflow-hidden h-40 p-4">
          <img className="w-full h-full object-cover rounded-xl" src={image} alt="" />
        </div>
      <div className="p-4">
        <h5 className="text-lg font-bold text-center mb-2">{title}</h5>
        <p className="text-gray-700 mb-4">{description}</p>
        <p className="text-red-600 font-semibold">{`$${payment}`}</p>
        <Link
          to="/venue"
          className="block mt-4 text-black hover:underline focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Read more
        </Link>
      </div>
    </div>
    /</div>
  );
};

VenueCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  payment: PropTypes.number.isRequired,
};

const VenueSlider = () => {
  const [data, setData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch("http://127.0.0.1:8000/");
        if (!result.ok) {
          throw new Error(`HTTP error! status : ${result.status}`);
        }
        const datas = await result.json();
        setData(datas);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const totalVenues = data?.venues?.length || 0;
  const visibleVenues = data?.venues?.slice(currentIndex, currentIndex + 4) || [];

  const showPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : totalVenues - 1
    );
  };

  const showNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < totalVenues - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="relative py-10 bg-orange-50 overflow-hidden flex items-center justify-center">
      <div className="flex space-x-4 p-8 transition-transform ease-in-out duration-300 transform translate-x-[-${currentIndex * 300}px]">
        {visibleVenues.map((venue, index) => (
          <VenueCard
            key={index}
            image={venue.image}
            title={venue.title}
            description={venue.description}
            payment={parseFloat(venue.payment)}
          />
        ))}
      </div>
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 cursor-pointer text-white hover:text-gray-400 transition-transform ease-in-out duration-300">
        <svg
          onClick={showPrevious}
          className="w-8 h-8 bg-orange-300 rounded-full p-2 hover:bg-orange-700"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M15 19l-7-7 7-7"></path>
        </svg>
      </div>
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 cursor-pointer text-white hover:text-gray-400 transition-transform ease-in-out duration-300">
        <svg
          onClick={showNext}
          className="w-8 h-8 bg-orange-300 rounded-full p-2 hover:bg-orange-700"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M9 5l7 7-7 7"></path>
        </svg>
      </div>
    </div>
  );
};

export default VenueSlider;
