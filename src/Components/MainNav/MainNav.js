import React, { useContext, useState } from "react";
import CartMenu from "../CartMenu/CartMenu";
import { FaBars } from "react-icons/fa";
import "./MainNav.scss";
import { Link, useLocation } from "react-router-dom";
import { AppContext } from "../../AppContext";

const MainNav = () => {
  const [flag, setFlag] = useState(false);

  const { navColor, leftmenuState, backdrop } = useContext(AppContext);
  const [navBg, setNavBg] = navColor;
  const [leftmenu, setLeftmenu] = leftmenuState;
  const [backdropState, setbackdropState] = backdrop;

  const showMenu = () => {
    setFlag(!flag);
  };
  const showLeftMenu = () => {
    setLeftmenu(true);
    setbackdropState(true);
  };

  const changeNavColorHome = () => {
    setNavBg(true);
  };
  const changeNavColorDetail = () => {
    setNavBg(false);
  };

  const main = {};
  return (
    <div className={`main-nav ${navBg ? "bg-g" : "bg-w"}`}>
      <span className="logo">LOGO</span>
      <ul className="nav">
        <li>
          <Link to="/" onClick={changeNavColorHome}>
            Home
          </Link>
        </li>
        <li>Books</li>
        <li className={flag ? "responsive" : ""}>Shop</li>
        <li>
          <Link to="/wishlist">Wishlist</Link>
        </li>
        <li className={flag ? "responsive" : ""}>
          <Link to="/about">About Us</Link>
        </li>
        <li className={flag ? "responsive" : ""}>Contact Us</li>
        <li className="menu-bars">
          <FaBars onClick={showLeftMenu} />
        </li>
      </ul>
      <CartMenu className="cart-menu" onClick={showMenu} />
    </div>
  );
};

export default MainNav;
