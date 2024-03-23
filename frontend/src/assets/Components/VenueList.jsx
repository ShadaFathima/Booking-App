/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./venue.css";
import { Link } from "react-router-dom";
import Footer from "./Footer/Footer";
import Navbar from "./NavBar/Navbar";

const VenueCard = ({ image, title, description, payment }) => {
  return (
    <div className="venue-card mb-8 mx-2">
      <div className="h-[375px] bg-white rounded-xl shadow-md overflow-hidden">
        <div className="rounded-t-xl overflow-hidden h-40 p-4">
          <img className="w-full h-full object-cover rounded-xl" src={image} alt="" />
        </div>
        <div className="p-4">
          <h5 className="text-lg font-bold text-center mb-2">{title}</h5>
          <p className="text-gray-700 mb-4">{description}</p>
          <p className="text-red-600 font-semibold">{`${payment}/-`}</p>
          <Link
            to={`/venue/${title}`}
            className="block mt-4 text-black hover:underline focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

VenueCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  payment: PropTypes.number.isRequired,
};

const VenueList = ({isLoggedIn,setIsLoggedIn}) => {
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch("http://127.0.0.1:8000/");
        if (!result.ok) {
          throw new Error(`HTTP error! status : ${result.status}`);
        }
        const data = await result.json();
        setVenues(data?.venues || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar  isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    <div className=" bg-orange-50">
      <div className="grid grid-cols-4 gap-8 py-10 bg-orange-50 mx-20">
        {venues.map((venue, index) => (
          <VenueCard
          key={index}
          image={venue.image}
          title={venue.title}
          description={venue.description}
          payment={parseFloat(venue.payment)}
          />
          ))}
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default VenueList;
