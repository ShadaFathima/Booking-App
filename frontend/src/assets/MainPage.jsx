import AboutUs from "./Components/AboutUs/About";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/NavBar/Navbar";
import Review from "./Components/Review ";
import Service from "./Components/Service";
import VenueSlider from "./Components/VenueSlider";
import Story from "./Components/story";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <VenueSlider />
      <Service />
      <Review />
      <AboutUs />
      <Story />
      <Footer />
    </div>
  );
};

export default MainPage;