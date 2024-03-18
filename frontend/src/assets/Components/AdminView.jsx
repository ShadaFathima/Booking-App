import { useEffect, useState } from 'react';
import './AdminView.css';

const AdminView = () => {
  // Sample booking data
  const initialBookings = [
    { id: 1, date: '2024-01-27', time: '10:00 AM', userId: 1, userName: 'John Doe', userEmail: 'john@example.com' },
    { id: 2, date: '2024-01-28', time: '2:00 PM', userId: 2, userName: 'Jane Smith', userEmail: 'jane@example.com' },
    // Add more booking objects as needed
  ];

  // State to store bookings data
  const [bookings, setBookings] = useState([]);

  // Function to fetch bookings data
  const fetchBookingsData = () => {
    // Simulate fetching data by setting state with the initial booking data
    setBookings(initialBookings);
  };

  // Fetch bookings data on component mount
  useEffect(() => {
    fetchBookingsData();
  }, []);

  return (
    <div className="admin-view">
      <h2>Admin Dashboard - Bookings</h2>
      <div className="booking-list">
        {bookings.map((booking) => (
          <div key={booking.id} className="booking-item">
            <div>
              <h3>Booking Date: {booking.date}</h3>
              <p>Booking Time: {booking.time}</p>
            </div>
            <div>
              <h3>User Details</h3>
              <p>User ID: {booking.userId}</p>
              <p>User Name: {booking.userName}</p>
              <p>User Email: {booking.userEmail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminView;







// import React, { useState, useEffect } from 'react';
// import BookingItem from './BookingItem'; // Assuming you have a BookingItem component

// const AdminView = () => {
//   const [bookings, setBookings] = useState([]);

//   // Simulated bookings data
//   const initialBookings = [
//     { id: 1, userId: 1, venue: 'Auditorium A', date: '2024-02-15', time: '10:00 AM' },
//     { id: 2, userId: 2, venue: 'Auditorium B', date: '2024-02-17', time: '2:00 PM' },
//     // Add more sample bookings as needed
//   ];

//   useEffect(() => {
//     // Simulated API call to fetch bookings data
//     // Replace this with actual API call to your backend
//     // For demonstration purposes, we'll use setTimeout to mimic async behavior
//     setTimeout(() => {
//       setBookings(initialBookings);
//     }, 1000);
//   }, []);

//   return (
//     <div className="admin-view">
//       <h2>Admin Dashboard - Bookings</h2>
//       <div className="booking-list">
//         {bookings.map((booking) => (
//           <BookingItem key={booking.id} booking={booking} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdminView;
