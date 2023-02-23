import React, { useState } from "react";
import AddProduct from "../AddProduct/AddProduct";
import UpdateComponent from "../UpdateComponent/UpdateComponent";
import { BsChevronRight } from "react-icons/bs";
import "./Admin.scss";

const Admin = () => {
  const [tab, setTab] = useState(0);

  const changeTab = () => {};

  return (
    <div>
      <div className="cart-detail-header">
        <h3 className="cart-h3">Admin</h3>
        <span className="cart-span"> HOME - ADMIN PAGE</span>
      </div>
      <div className="admin">
        <div className="side-menu">
          <div
            className={`menu-item ${tab == 0 ? "active-item" : ""}`}
            onClick={() => {
              setTab(0);
            }}
          >
            <a>Add a product</a>
            <BsChevronRight />
          </div>
          <div
            className={`menu-item ${tab == 1 ? "active-item" : ""}`}
            onClick={() => {
              setTab(1);
            }}
          >
            <a>Update product</a>
            <BsChevronRight />
          </div>
          <div
            className={`menu-item ${tab == 2 ? "active-item" : ""}`}
            onClick={() => {
              setTab(2);
            }}
          >
            <a>Delete product</a>
            <BsChevronRight />
          </div>
        </div>
        <div className="container">
          {tab == 0 ? (
            <AddProduct />
          ) : tab == 1 ? (
            "Under Construction"
          ) : tab == 2 ? (
            "Under Construction"
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
