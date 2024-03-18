import React from "react";

const UserProfile = () => {
  // Sample user data (replace with actual user data)
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    bookings: [
      {
        id: 1,
        auditorium: "Main Hall",
        date: "2024-02-15",
        time: "10:00 AM - 12:00 PM",
      },
      {
        id: 2,
        auditorium: "Conference Room",
        date: "2024-03-01",
        time: "2:00 PM - 4:00 PM",
      },
      // Add more booking details as needed
    ],
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-lg w-full bg-white p-6 shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-4">Your Profile</h2>
        <div className="mb-4">
          <strong>Name:</strong> {user.name}
        </div>
        <div className="mb-4">
          <strong>Email:</strong> {user.email}
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Your Bookings</h3>
          <ul>
            {user.bookings.map((booking) => (
              <li key={booking.id} className="mb-2">
                <strong>Auditorium:</strong> {booking.auditorium}<br />
                <strong>Date:</strong> {booking.date}<br />
                <strong>Time:</strong> {booking.time}
              </li>
            ))}
          </ul>
        </div>
        {/* Add more user information fields as needed */}
      </div>
    </div>
  );
};

export default UserProfile;






// import React from "react";
// import Footer from "./Footer/Footer";
// import Navbar from "./NavBar/Navbar";

// const UserProfile = () => {
//   // Sample user data (replace with actual user data)
//   const user = {
//     name: "John Doe",
//     email: "john.doe@example.com",
//     // Add more user data as needed
//   };

//   return (
//     <div>
//       <Navbar />
//     {/* <div className="flex justify-center items-center h-screen">
//       <div className="max-w-lg w-full bg-white p-6 shadow-md rounded-md">
//         <h2 className="text-2xl font-semibold mb-4">Your Profile</h2>
//         <div className="mb-4">
//           <strong>Name:</strong> {user.name}
//         </div>
//         <div className="mb-4">
//           <strong>Email:</strong> {user.email}
//         </div>
//         {/* Add more user information fields as needed */}
//       </div>
//     </div> */}
//     <Footer />
//     </div>
//   );
// };

// export default UserProfile;
