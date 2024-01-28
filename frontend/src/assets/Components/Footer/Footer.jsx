import "./footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-sections">
        <FooterSection title="Our Services">
          {/* Add list of services or links here */}

          <p>Booking</p>
          <p>Customer Care</p>
        </FooterSection>
        <FooterSection title="Help">
          {/* Add help content or links here */}

          <p>Support</p>
          <p>Terms & Conditions</p>
          <p>Privacy & policy</p>
        </FooterSection>
        <FooterSection title="Information">
          {/* Add information content or links here */}
          <p>About Us</p>
          <p>Careers</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </FooterSection>
        <FooterSection title="Contact Us">
          {/* Add contact information or links here */}
          <p>+91334556567</p>
          <p>Eventio@example.com</p>
        </FooterSection>
      </div>
      <div className="copyright">
        <hr />
        <p>copyright2024 © eventio</p>
      </div>
    </div>
  </footer>
);

const FooterSection = ({ title, children }) => (
  <div className="footer-section">
    <h3 style={{ display: "inline-block", borderBottom: "1px solid #fff" }}>
      {title}
    </h3>
    {children}
  </div>
);

export default Footer;
