// BookingItem.jsx

import React from 'react';

const BookingItem = ({ booking }) => {
  const { id, venue, date, time } = booking;

  return (
    <div className="booking-item">
      <h3>Booking ID: {id}</h3>
      <p>Venue: {venue}</p>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
    </div>
  );
};

export default BookingItem;
