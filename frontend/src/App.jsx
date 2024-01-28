import AboutUs from "./assets/Components/AboutUs/about";
import Banner from "./assets/Components/Banner/banner";
import Footer from "./assets/Components/Footer/Footer";
import Navbar from "./assets/Components/NavBar/Navbar";
import CardRow from "./assets/Components/RowVenues/cardRow";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <AboutUs />
      <Footer />

      {/* <h1>Hello</h1> */}
    </div>
  );
};

export default App;
