import customer from "../images/customer.jpeg";
import service from "../images/service.jpeg";
import venueowner from "../images/venueowner.jpeg";

const Service = () => {
  return (
    <div className="service-section mx-auto px-4 py-8">
      {" "}
      {/* Add padding for top & bottom */}
      <h2 className="text-4xl text-black mb-8 text-center">
        Our Services
      </h2>{" "}
      {/* Set same size for all headings */}
      <div className="flex items-center justify-center">
        {" "}
        {/* Center image and text */}
        <img
          src={service}
          alt="Our Services"
          className="w-48 h-48 object-cover mr-4 "
        />
        <p className="subsection-description text-xl px-10">
          {" "}
          {/* Increase text size */}
          Book ideal venues with ease. <br /> Elevate your events now!
        </p>
      </div>
      <div className="service-subsection mt-8">
        {" "}
        {/* Add margin for spacing */}
        <h2 className="text-4xl text-black mb-4 text-center">
          As a Customer
        </h2>{" "}
        {/* Set same size for all headings */}
        <div className="flex items-center justify-center">
          {" "}
          {/* Center image and text */}
          <p className="subsection-description text-xl mr-4 px-10">
            {" "}
            {/* Increase text size */}
            Unlock Experiences, Book Memories. <br /> Your Event, Elevated.
          </p>
          <img
            src={customer}
            alt="As a Venue Owner"
            className="w-48 h-48 object-cover"
          />
        </div>
      </div>
      <div className="service-subsection mt-8">
        {" "}
        {/* Add margin for spacing */}
        <h2 className="text-4xl text-black mb-4 text-center">
          As a Venue Owner
        </h2>{" "}
        {/* Set same size for all headings */}
        <div className="flex items-center justify-center">
          {" "}
          {/* Center image and text */}
          <img
            src={venueowner}
            alt="As a Customer"
            className="w-48 h-48 object-cover mr-4"
          />
          <p className="subsection-description text-xl px-10">
            {" "}
            {/* Increase text size */}
            Fuel growth, partner with us! Elevate <br /> your business now.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;

// import "./service.css";

// const Service = () => {
//   return (
//     <div className="service-section">
//       {/* Our Services */}
//       <div className="service-subsection">
//         <h2 className="subsection-heading">Our Services</h2>
//         <div className="subsection-content">
//           <p className="subsection-description">
//             Book ideal venues with ease. <br /> Elevate your events now!
//           </p>
//           <img
//             src="https://i.pinimg.com/564x/1a/75/93/1a7593a91d3ea833a96b3fc9fbf7e1ad.jpg"
//             alt="Our Services"
//             className="subsection-image-right"
//           />
//         </div>
//       </div>

//       {/* As a Customer */}
//       <div className="service-subsection">
//         <h2 className="subsection-heading">As a Customer</h2>
//         <div className="subsection-content">
//           <img
//             src="https://i.pinimg.com/236x/b2/35/0d/b2350d2103850d3c48674d1493c86b94.jpg"
//             alt="As a Customer"
//             className="subsection-image-left"
//           />
//           <p className="subsection-description">
//             Unlock Experiences, Book Memories. <br /> Your Event, Elevated.
//           </p>
//         </div>
//       </div>

//       {/* As a Venue Owner */}
//       <div className="service-subsection">
//         <h2 className="subsection-heading">As a Venue Owner</h2>
//         <div className="subsection-content">
//           <p className="subsection-description">
//             Fuel growth, partner with us! Elevate <br /> your business now
//           </p>
//           <img
//             src="https://i.pinimg.com/236x/86/8b/3c/868b3c0a787a2980951e31a5a60a718b.jpg"
//             alt="As a Venue Owner"
//             className="subsection-image-right"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Service;
