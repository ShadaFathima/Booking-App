import { useState } from "react";
import BookingItem from "./BookingItem"; // Assume you have a component to display each booking item

const BookingPage = () => {
  // Sample bookings and booking history data
  const sampleBookings = [
    { id: 1, venue: "Venue A", date: "2024-01-28", startTime: "10:00 AM", endTime: "12:00 PM" },
    { id: 2, venue: "Venue B", date: "2024-01-30", startTime: "1:00 PM", endTime: "3:00 PM" },
    // Add more sample bookings as needed
  ];

  const sampleBookingHistory = [
    { id: 101, venue: "Venue X", date: "2023-12-20", startTime: "9:00 AM", endTime: "11:00 AM" },
    { id: 102, venue: "Venue Y", date: "2023-12-25", startTime: "2:00 PM", endTime: "4:00 PM" },
    // Add more sample booking history as needed
  ];

  // State variables to hold bookings and booking history
  const [bookings] = useState(sampleBookings);
  const [bookingHistory] = useState(sampleBookingHistory);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Your Bookings</h1>
      <div>
        <h2 className="text-xl font-bold mb-2">Current Bookings</h2>
        {bookings.length === 0 ? (
          <p>No current bookings.</p>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {bookings.map((booking) => (
              <BookingItem key={booking.id} booking={booking} />
            ))}
          </div>
        )}
        <h2 className="text-xl font-bold mt-8 mb-2">Booking History</h2>
        {bookingHistory.length === 0 ? (
          <p>No booking history.</p>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {bookingHistory.map((booking) => (
              <BookingItem key={booking.id} booking={booking} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingPage;
