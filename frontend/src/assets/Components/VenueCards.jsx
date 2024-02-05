const VenueCards = () => {
  return (
    <div>
      <div className="flex flex-col bg-white m-auto p-auto">
        <h1 className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800">
          Example
        </h1>
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
            <div className="inline-block px-3">
              <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
            </div>
            <div className="inline-block px-3">
              <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
            </div>
            <div className="inline-block px-3">
              <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
            </div>
            <div className="inline-block px-3">
              <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
            </div>
            <div className="inline-block px-3">
              <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
            </div>
            <div className="inline-block px-3">
              <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
            </div>
            <div className="inline-block px-3">
              <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
            </div>
            <div className="inline-block px-3">
              <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueCards;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const VenueCards = () => {
//   const [venueCards, setVenueCards] = useState([]);

//   useEffect(() => {
//     // Fetch venue cards from your Django backend
//     axios.get('http://your-django-backend/api/venue-cards/')
//       .then(response => setVenueCards(response.data))
//       .catch(error => console.error('Error fetching venue cards:', error));
//   }, []); // Empty dependency array ensures useEffect runs only once

//   return (
//     <div>
//       <div className="flex flex-col bg-white m-auto p-auto">
//         <h1 className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800">
//           Example
//         </h1>
//         <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
//           <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
//             {venueCards.map(card => (
//               <div key={card.id} className="inline-block px-3">
//                 <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
//                   {/* Display venue card details here */}
//                   <h2>{card.title}</h2>
//                   <p>{card.description}</p>
//                   {/* Add other fields as needed */}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VenueCards;
