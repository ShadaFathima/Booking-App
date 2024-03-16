import { Link } from "react-router-dom";
import cart from "../../images/cart.png";
import avatar from "../../images/user.png";
import search from "../../images/search.png";
import './Navbar.css'; // Import CSS file for custom styles

const Navbar = () => {
  return (
    <div className="navbar bg-black text-white py-10 px-8 md:px-12 lg:px-24 xl:px-32 flex justify-between items-center">
      <h1 className="text-5xl font-bold cursor-pointer">EVENTIO</h1>
      <ul className="hidden md:flex list-none text-lg">
        <li className="mx-8">
          <Link to="/" className="text-white">HOME</Link>
        </li>
        <li className="mx-8">
          <Link to="/venuelist" className="text-white">VENUES</Link>
        </li>
        <li className="mx-8 text-white">ABOUT</li>
        <li className="mx-8">
          <Link to="/contact" className="text-white">CONTACT</Link>
        </li>
      </ul>
      <div className="searchbox relative h-10 flex items-center">
        <img src={search} alt="Search" className="w-6 h-6 absolute left-2" />
        <input type="text" placeholder="Search.." className="px-10 py-2 rounded-full bg-white flex-1 text-black" />
      </div>
      <img src={cart} alt="Cart" className="w-7 ml-6 cursor-pointer" />
      <Link to="/login">
        <img src={avatar} alt="Avatar" className="w-7 ml-6 cursor-pointer" />
      </Link>
    </div>
  );
};

export default Navbar;