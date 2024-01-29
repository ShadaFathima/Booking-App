import AboutUs from "./Components/AboutUs/About";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/NavBar/Navbar";
import VenueCards from "./Components/VenueCards";
const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <VenueCards />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default MainPage;
