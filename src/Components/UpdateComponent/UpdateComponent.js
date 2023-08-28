import React from "react";
import "./UpdateComponent.scss";

const UpdateComponent = () => {
  const update = async () => {
    const res = await fetch("https://api.escuelajs.co/api/v1/products/1", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Change title",
        price: 100,
      }),
    });
    const content = await res.json();
  };

  return (
    <div>
      <div className="container">
        <h3 className="form-title">Update a Product</h3>
        <hr className="hr" />
        <input placeholder="Title" className="form-input" />
        <br />
        <input placeholder="Price" className="form-input" />
        <br />
        <input placeholder="Description" className="form-input" />
        <br />
        <input placeholder="Category Id" className="form-input" />
        <a className="form-btn" onClick={update}>
          Log In
        </a>
        <a className="form-second-btn">
          Don’t have an account?
          <span>Register now</span>
        </a>
      </div>
    </div>
  );
};

export default UpdateComponent;
