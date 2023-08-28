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
 const { wishlistContext, searchResultArray, showSearchResultsFlag } =
   useContext(AppContext);
 const [wishlist, setWishlist] = wishlistContext;
 const [searchResult, setSearchResult] = searchResultArray;
 const [showSearchResults, setShowSearchResults] = showSearchResultsFlag;


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
  const wishlistHandler = () => {
     setSearchResult(wishlist);
     setShowSearchResults(true);

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
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/wishlist" onClick={wishlistHandler}>
            Wishlist
          </Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
        <li className="menu-bars">
          <FaBars onClick={showLeftMenu} />
        </li>
      </ul>
      <CartMenu className="cart-menu" onClick={showMenu} />
    </div>
  );
};

export default MainNav;
