import { FaInstagram, FaFacebook } from "react-icons/fa";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/NavBar/Navbar";

const ContactUs = () => {
  return (
    <div className="bg-gray-300">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-8 ">
          <h1 className="text-4xl font-bold text-gray-800">Get in Touch</h1>
        </div>
        <div className="text-center mb-8">
          <p className="text-lg text-gray-600">
            Welcome to Eventio, your go-to venue booking site. If you have any
            queries about our Eventio project, we're here to help!
          </p>
        </div>
        <div className="text-center mb-8">
          <p className="text-lg text-gray-600">
            Contact us through email at:{" "}
            <a href="mailto:info@eventio.com" className="text-blue-500">
              info@eventio.com
            </a>
          </p>
        </div>
        <div className="flex justify-center mb-8">
          <a
            href="https://www.instagram.com/eventio/"
            className="text-gray-600 hover:text-gray-900 mr-4"
          >
            <FaInstagram className="text-3xl" />
          </a>
          <a
            href="https://www.facebook.com/eventio/"
            className="text-gray-600 hover:text-gray-900"
          >
            <FaFacebook className="text-3xl" />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
