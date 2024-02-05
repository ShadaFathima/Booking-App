// VenueSlider.jsx
import { useState } from "react";
import PropTypes from "prop-types";
import "./venue.css";

const VenueCard = ({ image, name, description, price }) => {
  return (
    <section className="card-section">
      <div className="h-[350px] max-w-xs bg-white border border-gray-300 rounded-md shadow-md overflow-hidden transition-transform ease-in-out duration-300 transform hover:scale-105">
        <img className="w-full h-36 object-cover p-4" src={image} alt="" />
        <div className="p-4">
          <h5 className="text-lg font-bold text-center mb-2">{name}</h5>
          <p className="text-gray-700 mb-4">{description}</p>
          <p className="text-red-600 font-semibold">{`$${price.toFixed(2)}`}</p>
          <a
            href="#"
            className="block mt-4 text-black hover:underline focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Read more
          </a>
        </div>
      </div>
    </section>
  );
};

VenueCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

const VenueSlider = () => {
  // Sample venue data
  const venues = [
    {
      id: 1,
      image:
        "https://i.pinimg.com/564x/2d/8c/45/2d8c45048ce7622605bc93b57e39e61c.jpg",
      name: "Venue 1",
      description: "A beautiful venue for all occasions.",
      price: 150,
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/236x/7e/82/22/7e8222058d3bd5515ef92b8e016602a8.jpg",
      name: "Venue 2",
      description: "Spacious and elegant, perfect for events.",
      price: 200,
    },
    {
      id: 3,
      image:
        "https://i.pinimg.com/236x/9e/f9/fd/9ef9fd926babdd7b62697505ac4fc463.jpg",
      name: "Venue 3",
      description: "An intimate space with a touch of luxury.",
      price: 120,
    },
    {
      id: 4,
      image:
        "https://i.pinimg.com/236x/b9/c6/a1/b9c6a115c8ab3313867d25e48228302e.jpg",
      name: "Venue 4",
      description: "Versatile venue with modern amenities.",
      price: 180,
    },
    // Add more venues as needed
  ];

  const totalVenues = venues.length;

  const [currentIndex, setCurrentIndex] = useState(0);

  const showNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalVenues);
  };

  const showPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalVenues) % totalVenues);
  };

  return (
    <div className="relative py-10 bg-gray-200 overflow-hidden flex items-center justify-center">
      <div className="flex space-x-4 p-8">
        {[0, 1, 2].map((index) => {
          const venueIndex = (currentIndex + index) % totalVenues;
          const venue = venues[venueIndex];
          return (
            <VenueCard
              key={venue.id}
              image={venue.image}
              name={venue.name}
              description={venue.description}
              price={venue.price}
            />
          );
        })}
      </div>
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 cursor-pointer text-white transition-transform ease-in-out duration-300 hover:scale-110">
        <svg
          onClick={showPrevious}
          className="w-8 h-8 bg-blue-500 rounded-full p-2 hover:bg-blue-700"
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
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 cursor-pointer text-white transition-transform ease-in-out duration-300 hover:scale-110">
        <svg
          onClick={showNext}
          className="w-8 h-8 bg-blue-500 rounded-full p-2 hover:bg-blue-700"
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
