import "./Navbar.css";
import cart from "../../images/cart.png";
import avatar from "../../images/user.png";
import search from "../../images/search.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>EVENTIO</h1>
      <ul>
        <li>HOME</li>
        <li>VENUES</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
      <div className="searchbox">
        <img src={search} alt="" />
        <input type="text" placeholder="Search.." />
      </div>

      <img className="cart" src={cart} alt="" />
      <img className="avatar" src={avatar} alt="" />
    </div>
  );
};

export default Navbar;
