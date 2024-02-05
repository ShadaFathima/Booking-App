import "./content.css";

const Content = () => {
  return (
    <div className="App">
      <header className="header">
        <h1>Our Services</h1>
        <p>Book ideal venues with ease. Elevate your events now!</p>
        <button className="explore-btn">Explore</button>
      </header>
      <main className="main">
        <section className="customer-section">
          <h2>As a Customer</h2>
          <p>Unlock Experiences, Book Memories. Your Event, Elevated.</p>
          <button className="book-btn">Book</button>
        </section>
        <section className="venue-owner-section">
          <h2>As a Venue Owner</h2>
          <p>Fuel growth, partner with us! Elevate your business now.</p>
          <button className="partner-btn">Partner with us</button>
        </section>
      </main>
    </div>
  );
};

export default Content;
