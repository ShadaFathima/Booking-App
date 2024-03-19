import { useEffect, useState } from 'react';
import './AdminView.css'; // Import CSS file for custom styles

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
      <h2 className="dashboard-heading">Admin Dashboard - Bookings</h2>
      <table className="booking-table">
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Booking Date</th>
            <th>Booking Time</th>
            <th>User ID</th>
            <th>User Name</th>
            <th>User Email</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.date}</td>
              <td>{booking.time}</td>
              <td>{booking.userId}</td>
              <td>{booking.userName}</td>
              <td>{booking.userEmail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminView;
