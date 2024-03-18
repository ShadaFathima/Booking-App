import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Navbar from './NavBar/Navbar';
import Footer from './Footer/Footer';
import img1 from '../images/venue1.jpg';
import img2 from '../images/view.jpeg';
import img3 from '../images/venue2.jpg';

const VenueView = () => {
  const [startDate, setStartDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [availabilityChecked, setAvailabilityChecked] = useState(false);

  // Sample images for the slider
  const images = [`${img1}`, `${img2}`, `${img3}`];

  // Sample time slots
  const timeSlots = ['9:00 AM', '11:00 AM', '1:00 PM', '3:00 PM', '5:00 PM'];

  const handleCheckAvailability = () => {
    // Add logic here to check availability based on selected date and time slot
    // For example, you can make an API call to fetch availability data
    setAvailabilityChecked(true);
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-screen-lg mx-auto px-4 sm:px-8 py-8 sm:py-12">
        <div className="mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Venue Name</h2>
          <Slider autoplay dots>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Slide ${index}`} className="w-full h-80 sm:h-96 object-cover rounded-lg" />
              </div>
            ))}
          </Slider>
        </div>
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">About</h3>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula tortor ac metus scelerisque, sit amet
            condimentum velit ultricies. Proin hendrerit, dui sed mattis efficitur, arcu nisi lacinia libero, et rutrum
            sapien urna ut nunc.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula tortor ac metus scelerisque, sit amet
            condimentum velit ultricies. Proin hendrerit, dui sed mattis efficitur, arcu nisi lacinia libero, et rutrum
            sapien urna ut nunc.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="text-black"><strong>Capacity:</strong> 100 people</li>
            <li className="text-black"><strong>Location:</strong> Example City, Example Country</li>
          </ul>
        </div>
        <div className="mb-6 flex flex-col sm:flex-row items-center">
          <strong className="mb-4 sm:mb-0 mr-4">Check Availability</strong>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="border border-gray-300 rounded-lg px-4 py-2 mb-4 sm:mb-0 mr-4"
            placeholderText="Select Date"
            minDate={new Date()} // Set minDate to today's date to disable past dates
          />
          <select
            className="border border-gray-300 rounded-lg px-4 py-2 mb-4 sm:mb-0 mr-4"
            value={selectedTimeSlot}
            onChange={(e) => setSelectedTimeSlot(e.target.value)}
          >
            <option value="">Select Time Slot</option>
            {timeSlots.map((timeSlot, index) => (
              <option key={index} value={timeSlot}>{timeSlot}</option>
            ))}
          </select>
          <button onClick={handleCheckAvailability} className="bg-black text-white px-4 py-2 rounded-lg">
            Check
          </button>
        </div>
        {availabilityChecked && (
          <p className="text-green-500 mb-4">Availability checked. Display availability status here.</p>
        )}
        <div className="flex justify-end">
          <button className="bg-black text-white px-10 py-4 rounded-lg">
            Book Now
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VenueView;
