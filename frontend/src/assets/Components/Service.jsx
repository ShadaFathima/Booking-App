import "./service.css";

const Service = () => {
  return (
    <div className="service-section">
      {/* Our Services */}
      <div className="service-subsection">
        <h2 className="subsection-heading">Our Services</h2>
        <div className="subsection-content">
          <p className="subsection-description">
            Book ideal venues with ease. <br /> Elevate your events now!
          </p>
          <img
            src="https://i.pinimg.com/236x/7f/8b/9e/7f8b9efd259c6225a1f7ee8b7a8d11c9.jpg"
            alt="Our Services"
            className="subsection-image-right"
          />
        </div>
      </div>

      {/* As a Customer */}
      <div className="service-subsection">
        <h2 className="subsection-heading">As a Customer</h2>
        <div className="subsection-content">
          <img
            src="https://i.pinimg.com/236x/b2/35/0d/b2350d2103850d3c48674d1493c86b94.jpg"
            alt="As a Customer"
            className="subsection-image-left"
          />
          <p className="subsection-description">
            Unlock Experiences, Book Memories. <br /> Your Event, Elevated.
          </p>
        </div>
      </div>

      {/* As a Venue Owner */}
      <div className="service-subsection">
        <h2 className="subsection-heading">As a Venue Owner</h2>
        <div className="subsection-content">
          <p className="subsection-description">
            Fuel growth, partner with us! Elevate <br /> your business now
          </p>
          <img
            src="https://i.pinimg.com/236x/86/8b/3c/868b3c0a787a2980951e31a5a60a718b.jpg"
            alt="As a Venue Owner"
            className="subsection-image-right"
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
