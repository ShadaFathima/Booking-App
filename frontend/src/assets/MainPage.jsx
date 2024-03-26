/* eslint-disable react/prop-types */
import AboutUs from "./Components/AboutUs/About";
import Banner from "./Components/Banner/Banner";
import Feedback from "./Components/Feedback";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/NavBar/Navbar";
import Review from "./Components/Review ";
import Service from "./Components/Service";
// import Venue from "./Components/VenueSlider";
import Story from "./Components/Story";
import VenueSlider from "./Components/VenueSlider";
// import PaymentForm from "./Components/PaymentForm";
// import VenueCard from "./Components/VenueSlider";
import { useRef } from "react";

const MainPage = ({ isLoggedIn, setIsLoggedIn }) => {
  const aboutUsRef = useRef(null);

  return (
    <div>
      <Navbar
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        aboutUsRef={aboutUsRef}
      />

      <Banner />
      <VenueSlider />
      {/* <VenueCard /> */}
      <Service />
      <Review />
      <AboutUs aboutUsRef={aboutUsRef} />
      <Story />
      <Feedback />

      <Footer />
    </div>
  );
};

export default MainPage;
