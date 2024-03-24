import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./Footer/Footer";
import Navbar from "./NavBar/Navbar";

const UserProfile = ({ isLoggedIn, loggedInUsername }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (isLoggedIn) {
      console.log("Fetching user data for:", loggedInUsername);
      // Fetch user data from the backend
      axios.post("http://127.0.0.1:8000/api/user-profile/", { username: loggedInUsername }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}` // Include the authentication token
        }
      })
        .then(response => {
          console.log("User data:", response.data.user_profile);
          setUserData(response.data.user_profile);
        })
        .catch(error => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [isLoggedIn, loggedInUsername]);

  useEffect(() => {
    if (userData && userData.username) {
      console.log("Fetching bookings for:", userData.username);
      // Fetch user-specific bookings from the backend
      axios.post("http://127.0.0.1:8000/api/user-bookings/", { username: userData.username }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
        .then(response => {
          console.log("User bookings:", response.data.user_bookings);
          setUserData(prevState => ({
            ...prevState,
            bookings: response.data.user_bookings
          }));
        })
        .catch(error => {
          console.error("Error fetching user bookings:", error);
        });
    }
  }, [userData]);

  console.log("Rendering UserProfile component with userData:", userData);

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
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
