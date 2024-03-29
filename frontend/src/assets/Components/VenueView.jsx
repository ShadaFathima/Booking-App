/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "./NavBar/Navbar";
import Footer from "./Footer/Footer";
import { useParams } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import BookingForm from "./BookingForm";
import "./venueview.css";
import axios from "axios";

const VenueView = ({ isLoggedIn }) => {
  const { title } = useParams();
  const [venue, setVenue] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [availabilityChecked, setAvailabilityChecked] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [contact, setContact] = useState("");
  const [contactError, setContactError] = useState("");
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [mapUrl, setMapUrl] = useState("");
  // const GOOGLE_MAPS_API_KEY = 'AIzaSyBo9SCh9z3AbDYpKwcQqMyfll2DmBQ3MmU';
  useEffect(() => {
    const fetchVenueDetails = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/venue/${encodeURIComponent(title)}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch venue details");
        }
        const data = await response.json();
        const venueData = {
          title: data.title,
          description: data.description,
          payment: data.payment,
          images: [data.image1, data.image2, data.image3],
          location: data.location,
          map_url: data.map_url,
        };
        setVenue(venueData);
        setSelectedVenue(venueData);
        const embedUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBo9SCh9z3AbDYpKwcQqMyfll2DmBQ3MmU&q=${encodeURIComponent(
          data.map_url
        )}`;
        setMapUrl(embedUrl);
        console.log(venueData);
        // setMapIframe(data.map_iframe);  // Set selectedVenue when venue data is fetched
      } catch (error) {
        console.error("Error fetching venue details:", error);
      }
    };

    fetchVenueDetails();
  }, [title]);

  const handleCheckAvailability = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/check-availability/",
        {
          venueTitle: venue.title,
          selectedDate: startDate.toISOString(), // Convert selectedDate to ISO string format
          selectedTimeSlot: selectedTimeSlot,
        }
      );
      const responseData = response.data;
      if (responseData.available !== undefined) {
        if (responseData.available) {
          alert(
            "Venue is available for the selected date and time slot. You can proceed with booking."
          );
          // Proceed with booking logic here if needed
        } else {
          alert(
            "Venue is not available for the selected date and time slot. Please choose another date or time slot."
          );
        }
        setAvailabilityChecked(true);
      } else {
        console.error("Error: No availability status found in the response");
        alert("An error occurred while checking availability");
      }
    } catch (error) {
      console.error("Error checking availability:", error);
      alert("An error occurred while checking availability");
    }
  };

  const handleBookNowClick = () => {
    if (!isLoggedIn) {
      alert("Please login for booking");
      return;
    }
    setShowBookingForm(true);
    // Prevent scrolling when the booking form is opened
    document.body.classList.add("no-scroll");
  };

  const handleCloseBookingForm = () => {
    setShowBookingForm(false);
    // Enable scrolling when the booking form is closed
    document.body.classList.remove("no-scroll");
  };

  const handleContactChange = (e) => {
    const value = e.target.value;
    setContact(value);
    if (!/^\d{10}$/.test(value)) {
      setContactError("Contact number must be 10 digits");
    } else {
      setContactError("");
    }
  };

  const handleConfirmBooking = () => {
    // Add logic to handle booking confirmation
    // For now, let's show a simple alert
    alert("Booking confirmed!");
    // Close the booking form after confirmation
    handleCloseBookingForm();
  };

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} />
      {venue ? (
        <div className="max-w-screen-lg mx-auto px-4 sm:px-8 py-8 sm:py-12">
          <div className="mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {venue.title}
            </h2>
            <Slider autoplay dots>
              {venue.images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`Slide ${index}`}
                    className="w-full h-80 sm:h-96 object-cover rounded-lg"
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">
              About
            </h3>
            <p className="text-gray-700">{venue.description}</p>
            <ul className="list-disc pl-6 mb-4">
              <li className="text-black">
                <strong>Location:</strong> {venue.location}
              </li>
            </ul>
          </div>
          <div className="mb-6 flex flex-col sm:flex-row items-center">
            <strong className="mb-4 sm:mb-0 mr-4">Check Availability</strong>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="border border-gray-300 rounded-lg px-4 py-2 mb-4 sm:mb-0 mr-4"
              placeholderText="Select Date"
              minDate={new Date()}
            />
            <select
              className="border border-gray-300 rounded-lg px-4 py-2 mb-4 sm:mb-0 mr-4"
              value={selectedTimeSlot}
              onChange={(e) => setSelectedTimeSlot(e.target.value)}
            >
              <option value="">Select Time Slot</option>
              <option value="10am-3pm">10am - 3pm</option>
              <option value="5pm-10pm">5pm - 10pm</option>
            </select>
            <button
              onClick={handleCheckAvailability}
              className="bg-black text-white px-4 py-2 rounded-lg"
            >
              Check
            </button>
          </div>
          <div className="flex justify-end pb-4">
            <button
              onClick={handleBookNowClick}
              className="bg-black text-white px-10 py-4 rounded-lg"
            >
              Book Now
            </button>
          </div>
          {mapUrl && (
            <div>
              <iframe
                title="Map"
                src={mapUrl} // Use the map URL from the backend
                width="100%"
                height="400"
                frameBorder="0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          )}
        </div>
      ) : (
        <div>Loading...</div>
      )}
      <Footer />
      {showBookingForm && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 overflow-hidden">
          <div className="bg-white p-8 rounded-lg relative w-96">
            <button
              onClick={handleCloseBookingForm}
              className="absolute top-0 right-0 m-4 text-gray-600 hover:text-black"
            >
              <AiOutlineClose size={24} />
            </button>
            <BookingForm
              selectedVenue={selectedVenue}
              selectedDate={startDate} // Pass selectedDate
              selectedTimeSlot={selectedTimeSlot} // Pass selectedTimeSlot
              contact={contact}
              onContactChange={handleContactChange}
              contactError={contactError}
              onSubmit={handleConfirmBooking}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default VenueView;

// import { useState, useEffect } from 'react';
// // import PropTypes from 'prop-types';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import Navbar from './NavBar/Navbar';
// import Footer from './Footer/Footer';
// import { useParams } from 'react-router-dom';

// const VenueView = ({isLoggedIn}) => {
//   const { title } = useParams(); // Change title to id
//   console.log(title);
//   const [venue, setVenue] = useState(null);
//   const [startDate, setStartDate] = useState(null);
//   const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
//   const [availabilityChecked, setAvailabilityChecked] = useState(false);

//   useEffect(() => {
//     const fetchVenueDetails = async () => {
//       try {
//         const response = await fetch(`http://127.0.0.1:8000/venue/${encodeURIComponent(title)}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch venue details');
//         }
//         const data = await response.json();
//         setVenue({
//           title: data.title,
//           description: data.description,
//           payment: data.payment,
//           images: [data.image1, data.image2, data.image3], // Store images in an array
//           location: data.location,
//           map_iframe: data.map_iframe,
//           // Add other fields as needed
//         });

//         console.log(data);
//       } catch (error) {
//         console.error('Error fetching venue details:', error);
//       }
//     };

//     fetchVenueDetails();
//   }, [title]);

//   const handleCheckAvailability = () => {
//     // Add logic here to check availability based on selected date and time slot
//     // For example, you can make an API call to fetch availability data
//     setAvailabilityChecked(true);
//   };

//   return (
//     <div>
//       <Navbar  isLoggedIn={isLoggedIn}/>
//       {venue ? (
//         <div className="max-w-screen-lg mx-auto px-4 sm:px-8 py-8 sm:py-12">
//           <div className="mb-6">
//             <h2 className="text-3xl sm:text-4xl font-bold mb-4">{venue.title}</h2>
//             <Slider autoplay dots>
//               {venue.images.map((image, index) => (
//                 <div key={index}>
//                   <img src={image} alt={`Slide ${index}`} className="w-full h-80 sm:h-96 object-cover rounded-lg" />
//                 </div>
//               ))}
//             </Slider>
//           </div>
//           <div className="mb-6">
//             <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">About</h3>
//             <p className="text-gray-700">{venue.description}</p> {/* Remove mb-4 class to prevent truncation */}
//             <ul className="list-disc pl-6 mb-4">
//               <li className="text-black"><strong>Location:</strong> {venue.location}</li>
//             </ul>
//           </div>
//           <div className="mb-6 flex flex-col sm:flex-row items-center">
//             <strong className="mb-4 sm:mb-0 mr-4">Check Availability</strong>
//             <DatePicker
//               selected={startDate}
//               onChange={(date) => setStartDate(date)}
//               className="border border-gray-300 rounded-lg px-4 py-2 mb-4 sm:mb-0 mr-4"
//               placeholderText="Select Date"
//               minDate={new Date()} // Set minDate to today's date to disable past dates
//             />
//             <select
//               className="border border-gray-300 rounded-lg px-4 py-2 mb-4 sm:mb-0 mr-4"
//               value={selectedTimeSlot}
//               onChange={(e) => setSelectedTimeSlot(e.target.value)}
//             >
//               <option value="">Select Time Slot</option>
//               <option value="10am-3pm">10am - 3pm</option>
//               <option value="5pm-10pm">5pm - 10pm</option>
//             </select>

//             <button onClick={handleCheckAvailability} className="bg-black text-white px-4 py-2 rounded-lg">
//               Check
//             </button>
//           </div>
//           {availabilityChecked && (
//             <p className="text-green-500 mb-4">Availability checked. Display availability status here.</p>
//           )}
//           {/* <div dangerouslySetInnerHTML={{__html: venue.map_iframe}} className="mb-6" /> */}
//           <div className="flex justify-end">
//             <button className="bg-black text-white px-10 py-4 rounded-lg">
//               Book Now
//             </button>
//           </div>
//         </div>
//       ) : (
//         <div>Loading...</div>
//       )}
//       <Footer />
//     </div>
//   );
// };

// export default VenueView;
