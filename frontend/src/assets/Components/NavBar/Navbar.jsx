import "./Navbar.css";
import cart from "../../images/cart.png";
import avatar from "../../images/user.png";
import search from "../../images/search.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>EVENTIO</h1>
      <ul>
        <Link>
          <li>HOME</li>
        </Link>
        <li>VENUES</li>
        <li>ABOUT</li>
        <Link to="/contact">
          <li>CONTACT</li>
        </Link>
      </ul>
      <div className="searchbox">
        <img src={search} alt="" />
        <input type="text" placeholder="Search.." />
      </div>

      <img className="cart" src={cart} alt="" />
      <Link to="/login">
        <img className="avatar" src={avatar} alt="" />
      </Link>
    </div>
  );
};

export default Navbar;
