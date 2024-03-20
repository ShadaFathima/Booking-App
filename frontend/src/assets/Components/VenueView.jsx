// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import Navbar from './NavBar/Navbar';
// import Footer from './Footer/Footer';
// import { useParams } from 'react-router-dom';

// const VenueView = () => {
//   const { title } = useParams();
//   // Log the value of title to the console
//   console.log('Title:', title);
//   const [venue, setVenue] = useState(null);
//   const [availabilityChecked, setAvailabilityChecked] = useState(false);

//   useEffect(() => {
//     const fetchVenueDetails = async () => {
//       try {
//         const response = await fetch(`http://127.0.0.1:8000/venue/${title}/`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch venue details');
//         }
//         const data = await response.json();
//         setVenue(data);
//       } catch (error) {
//         console.error('Error fetching venue details:', error);
//       }
//     };

//     fetchVenueDetails();
//   }, [title]);

//   return (
//     <div>
//       {/* Navbar component */}
//       <Navbar />
//       {/* Conditional rendering of venue details */}
//       {venue && (
//         <div className="max-w-screen-lg mx-auto px-4 sm:px-8 py-8 sm:py-12">
//           {/* Render venue details here */}
//           <h2 className="text-3xl font-bold">{venue.title}</h2>
//           <p className="text-gray-700">{venue.description}</p>
//           <p className="text-red-600 font-semibold">{`$${venue.payment}`}</p>
//           {/* Add more rendering logic for other venue details */}
//         </div>
//       )}
//       {/* Footer component */}
//       <Footer />
//     </div>
//   );
// };

// export default VenueView;




import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Navbar from './NavBar/Navbar';
import Footer from './Footer/Footer';
import { useParams } from 'react-router-dom';

const VenueView = () => {
  const { title } = useParams();
  console.log(title);
  const [venue, setVenue] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [availabilityChecked, setAvailabilityChecked] = useState(false);

  useEffect(() => {
    const fetchVenueDetails = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/venue/${title}/`);
        if (!response.ok) {
          throw new Error('Failed to fetch venue details');
        }
        const data = await response.json();
        setVenue(data);
      } catch (error) {
        console.error('Error fetching venue details:', error);
      }
    };

    fetchVenueDetails();
  }, [title]);

  const handleCheckAvailability = () => {
    // Add logic here to check availability based on selected date and time slot
    // For example, you can make an API call to fetch availability data
    setAvailabilityChecked(true);
  };

  if (!venue) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-screen-lg mx-auto px-4 sm:px-8 py-8 sm:py-12">
        <div className="mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{venue.title}</h2>
          <Slider autoplay dots>
            {venue.images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Slide ${index}`} className="w-full h-80 sm:h-96 object-cover rounded-lg" />
              </div>
            ))}
          </Slider>
        </div>
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">About</h3>
          <p className="text-gray-700 mb-4">{venue.description}</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="text-black"><strong>Location:</strong> {venue.location}</li>
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
            {venue.timeSlots.map((timeSlot, index) => (
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
