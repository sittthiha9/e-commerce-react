import { useState } from "react";
import logo from "../assets/logo.png";
import cartIcon from "../assets/cart_icon.png";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar">
      <div className="navLogo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>
      <div className="navMenu">
        <ul>
          <li onClick={() => setMenu("shop")}>
            <NavLink style= {{textDecoration:'none'}} to="/">Shop</NavLink>
            {menu === "shop" && <hr />}
          </li>
          <li onClick={() => setMenu("men")}>
            <NavLink style= {{textDecoration:'none'}} to="men">Men</NavLink>
            {menu === "men" && <hr />}
          </li>
          <li onClick={() => setMenu("women")}>
            {" "}
            <NavLink  style= {{textDecoration:'none'}} to="women">Women</NavLink>
            {menu === "women" && <hr />}
          </li>
          <li onClick={() => setMenu("kids")}>
            <NavLink style= {{textDecoration:'none'}} to="kids">Kids</NavLink>
            {menu === "kids" && <hr />}
          </li>
        </ul>
      </div>
      <div className="navCart">
        <NavLink to="login">
          <button>Log in</button>
        </NavLink>
        <div className="cartIcon">
          <NavLink to="cart">
            <img src={cartIcon} alt="cart" />
          </NavLink>
          <div className="badge">0</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
