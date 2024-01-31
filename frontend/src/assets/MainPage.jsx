import AboutUs from "./Components/AboutUs/About";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/NavBar/Navbar";

import Review from "./Components/Review ";
import VenueSlider from "./Components/VenueSlider";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <VenueSlider />
      <Review />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default MainPage;
