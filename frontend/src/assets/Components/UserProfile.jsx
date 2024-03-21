import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./Footer/Footer";
import Navbar from "./NavBar/Navbar";

const UserProfile = ({isLoggedIn}) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from the backend
    axios.get("http://127.0.0.1:8000/api/user-profile/") // Update the URL accordingly
      .then(response => {
        setUserData(response.data.user_profile); // Accessing user_profile key
      })
      .catch(error => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  useEffect(() => {
    if (userData) {
      // Fetch user-specific bookings from the backend
      axios.get(`http://127.0.0.1:8000/api/booked-venues/${userData.username}`) // Update the URL accordingly
        .then(response => {
          setUserData(prevState => ({
            ...prevState,
            bookings: response.data.booked_venues // Accessing booked_venues key
          }));
        })
        .catch(error => {
          console.error("Error fetching user bookings:", error);
        });
    }
  }, [userData]);

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} />
      <div className="flex justify-center items-center h-screen">
        <div className="max-w-lg w-full bg-white p-6 shadow-md rounded-md">
          <h2 className="text-2xl font-semibold mb-4">Your Profile</h2>
          {userData && (
            <>
              <div className="mb-4">
                <strong>Username:</strong> {userData.username}
              </div>
              <div className="mb-4">
                <strong>Email:</strong> {userData.email}
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Your Bookings</h3>
                <ul>
                  {userData.bookings.map((booking) => (
                    <li key={booking.id} className="mb-2">
                      <strong>Auditorium:</strong> {booking.auditorium}<br />
                      <strong>Date:</strong> {booking.date}<br />
                      <strong>Time:</strong> {booking.time}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Add more user information fields as needed */}
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
