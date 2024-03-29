import React, { useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';

const BookingForm = ({ selectedVenue, selectedDate, selectedTimeSlot }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    comment: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error message when user starts typing
    setErrors({
      ...errors,
      [e.target.name]: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic validation
    const { name, email, contact } = formData;
    const errors = {};
    if (!name.trim()) {
      errors.name = 'Name is required';
    }
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email format';
    }
    if (!contact.trim()) {
      errors.contact = 'Contact details are required';
    } else if (!/^\d{10}$/.test(contact)) {
      errors.contact = 'Contact number must be 10 digits';
    }
    // If there are errors, set them and prevent form submission
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    // If no errors, submit the form
    try {
      // Include venue title, selected date, and selected time in formData
      const formattedDate = format(selectedDate, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx", { timeZone: 'UTC' });

      const bookingData = {
        ...formData,
        venueTitle: selectedVenue?.title, // Use optional chaining to handle potential undefined selectedVenue
        selectedDate: formattedDate.slice(0, 10), // Slice to get only date part
        selectedTimeSlot: selectedTimeSlot, // Assuming selectedTimeSlot is available in your component's state
      };
      console.log('Data to be sent to backend:', bookingData);

      const response = await axios.post('http://127.0.0.1:8000/submit-booking/', bookingData);
      if (response.status === 200) {
        alert('Booking submitted successfully');
        setFormData({
          name: '',
          email: '',
          contact: '',
          comment: '',
        });
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      alert('The venue is Unavailable . please choose a different date or time. ');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-screen-lg mx-auto px-4 sm:px-8 py-8 sm:py-12">
      <div className="mb-4">
        <label htmlFor="name" className="block font-semibold mb-1">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="border border-gray-300 rounded-lg px-4 py-2 w-full" />
        {errors.name && <p className="text-red-500">{errors.name}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block font-semibold mb-1">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="border border-gray-300 rounded-lg px-4 py-2 w-full" />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="contact" className="block font-semibold mb-1">Contact Details:</label>
        <input type="tel" id="contact" name="contact" value={formData.contact} onChange={handleChange} className="border border-gray-300 rounded-lg px-4 py-2 w-full" />
        {errors.contact && <p className="text-red-500">{errors.contact}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="comment" className="block font-semibold mb-1">Comments (Optional):</label>
        <textarea id="comment" name="comment" value={formData.comment} onChange={handleChange} className="border border-gray-300 rounded-lg px-4 py-2 w-full"></textarea>
      </div>
      <button type="submit" className="bg-black text-white px-6 py-3 rounded-lg">Confirm Booking</button>
    </form>
  );
};

export default BookingForm;
