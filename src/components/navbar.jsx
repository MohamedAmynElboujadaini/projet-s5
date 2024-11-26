import cartPng from "../assets/images/cart.png";
import menuPng from "../assets/images/menu.png";
import logoPng from "../assets/images/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="container">
        <div className="navbar">
        <div className="logo">
            <Link to="/">
            <img src={logoPng} alt="logo" width="125px" />
            </Link>
        </div>
        <nav>
            <ul id="MenuItems">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/account">Account</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            </ul>
        </nav>
        <a href="cart.html">
            <img src={cartPng} width="30px" height="30px" />
        </a>
        <img src={menuPng} className="menu-icon" /*onClick={menutoggle}*/ alt="menu-icon" />
        </div>
    </div>
  );
};

export default Navbar;
