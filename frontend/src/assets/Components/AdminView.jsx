import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa"; // Import user icon from react-icons library
import "./AdminView.css"; // Import CSS file for custom styles

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = (e) => {
    e.preventDefault();
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    // Implement logout functionality here
    // For example, clear user session and redirect to login page
  };

  return (
    <nav className="flex justify-between items-center bg-black text-white py-6 px-6 ">
      <div>
        <h1 className="text-5xl font-bold mx-5">EVENTIO</h1>
      </div>
      <div className="relative">
        <FaUser
          className="text-xl cursor-pointer mx-5"
          onClick={handleToggleMenu}
        />
        {showMenu && (
          <div className="absolute top-full right-0 mt-2 w-48 text-black bg-white border border-gray-200 rounded-md shadow-lg z-10">
            <ul className="py-2">
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

const AdminView = () => {
  // Sample booking data
  const initialBookings = [
    {
      id: 1,
      date: "2024-01-27",
      time: "10:00 AM",
      userId: 1,
      userName: "John Doe",
      userEmail: "john@example.com",
    },
    {
      id: 2,
      date: "2024-01-28",
      time: "2:00 PM",
      userId: 2,
      userName: "Jane Smith",
      userEmail: "jane@example.com",
    },
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
    <div>
      <div className="admin-view">
        <Navbar />
        <h2 className="text-3xl font-bold text-black m-4 mb-4">
          Admin Dashboard - Bookings
        </h2>
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
    </div>
  );
};

export default AdminView;
