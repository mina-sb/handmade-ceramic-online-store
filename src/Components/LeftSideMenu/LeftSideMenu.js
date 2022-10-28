import React, { useContext, useState } from "react";
import "./LeftSideMenu.scss";
import { FaBars } from "react-icons/fa";

import { BsChevronRight } from "react-icons/bs";
import { AppContext } from "../../AppContext";
import { Link, useNavigate } from "react-router-dom";

const LeftSideMenu = () => {
  const { leftmenuState, backdrop } = useContext(AppContext);
  const [leftmenu, setLeftmenu] = leftmenuState;
  const [backdropState, setbackdropState] = backdrop;

  const closeCart = () => {
    setLeftmenu(false);
    setbackdropState(false);
  };

  return (
    <div
      className={`left-menu ${leftmenu ? "left-menu-open" : "left-menu-close"}`}
    >
      <div className="left-menu-hearder">
        <FaBars className="left-menu-title" />
        <span className="left-menu-title">MENU</span>
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link onClick={closeCart} to="/">
              <div className="menu-item">
                <a>HOME</a>
                <BsChevronRight />
              </div>
            </Link>
          </li>
          <li>
            <div className="menu-item">
              <a>SHOP</a>
              <BsChevronRight />
            </div>
          </li>
          <li>
            <Link to="/wishlist" onClick={closeCart}>
              <div className="menu-item">
                <a>WISH LIST</a>
                <BsChevronRight />
              </div>
            </Link>
          </li>
          <li>
            <Link onClick={closeCart} to="/about">
              <div className="menu-item">
                <a>ABOUT US</a>
                <BsChevronRight />
              </div>
            </Link>
          </li>
          <li>
            <Link onClick={closeCart} to="/contact">
              <div className="menu-item">
                <a>CONTACT US</a>
                <BsChevronRight />
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="close-leftMenu" onClick={closeCart}>
        <span>close</span>
      </div>
    </div>
  );
};

export default LeftSideMenu;
