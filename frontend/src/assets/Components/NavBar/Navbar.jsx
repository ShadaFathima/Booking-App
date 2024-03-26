/* eslint-disable react/prop-types */
import { Link  } from "react-router-dom";
import { useState } from "react";
import cart from "../../images/cart.png";
import avatar from "../../images/user.png";
import search from "../../images/search.png";
import "./Navbar.css"; // Import CSS file for custom styles
import axios from "axios"; // Import Axios for making HTTP requests

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); // State to store the search query

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    // Logic for handling logout
    setIsLoggedIn(false);
    setIsMenuOpen(false); // Close the menu after logout
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/search/?q=${encodeURIComponent(searchQuery)}`);
      // Handle response data
      console.log(response.data);
      window.location.href('/venue/${title}')
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  // const navigateToVenue = (title) => {
  //   navigate(`/venue/${title}`);
  // };

  return (
    <div className="navbar bg-black text-white py-10 px-8 md:px-12 lg:px-24 xl:px-32 flex justify-between items-center relative">
      <h1 className="text-5xl font-bold cursor-pointer">EVENTIO</h1>
      <ul className="hidden md:flex list-none text-lg">
        <li className="mx-8">
          <Link to="/" className="text-white">
            HOME
          </Link>
        </li>
        <li className="mx-8">
          <Link to="/venuelist" className="text-white">
            VENUES
          </Link>
        </li>
        <li className="mx-8 text-white">ABOUT</li>
        <li className="mx-8">
          <Link to="/contact" className="text-white">
            CONTACT
          </Link>
        </li>
      </ul>
      <div className="searchbox relative h-10 flex items-center">
        <img src={search} alt="Search" className="w-6 h-6 absolute left-2" />
        <input
          type="text"
          placeholder="Search.."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
          className="px-10 py-2 rounded-full bg-white flex-1 text-black"
        />
        <button onClick={handleSearch} className="px-4 py-2 bg-white-500 text-white rounded-lg ml-2">Search</button>
      </div>
      {isLoggedIn ? (
        <>
          <Link to="/userbookings">
            {" "}
            <img src={cart} alt="Cart" className="w-7 ml-6 cursor-pointer" />
          </Link>
          <div className="relative">
            <img
              src={avatar}
              alt="Avatar"
              className="w-7 ml-6 cursor-pointer"
              onClick={(e) => {
                e.preventDefault(); // Prevent default behavior
                toggleMenu(); // Toggle the menu
              }}
            />
            {isMenuOpen && (
              <div className="dropdown-menu absolute top-full right-0 bg-white border border-gray-200 rounded-lg shadow-md mt-2">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Your Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                >
                  Logout
                </button>
                {/* Add more menu items as needed */}
              </div>
            )}
          </div>
        </>
      ) : (
        <Link to="/login">
          <img src={avatar} alt="Avatar" className="w-7 ml-6 cursor-pointer" />
        </Link>
      )}
    </div>
  );
};

export default Navbar;
