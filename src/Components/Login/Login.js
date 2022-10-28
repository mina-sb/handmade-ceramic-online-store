import React, { useContext, useState } from "react";
import { AppContext } from "../../AppContext";
import "./Login.scss";

const Login = () => {
  const { loginState } = useContext(AppContext);
  const [showForm, setShowForm] = loginState;
  const [register, setRegister] = useState(1);

  return (
    <div className={`form ${showForm ? "form-show" : ""}`}>
      {register == 1 ? (
        <div className="login-container">
          <h3 className="form-title">LOGIN</h3>
          <hr className="hr" />
          <h4 className="form-sub-title">Great to have you back!</h4>
          <input placeholder="Email Adress" className="form-input" />
          <br />
          <input placeholder="Password" className="form-input" />
          <span className="forget-password" onClick={() => setRegister(3)}>
            Forgot your password?
          </span>
          <a className="form-btn">Log In</a>
          <a className="form-second-btn">
            Don’t have an account?
            <span onClick={() => setRegister(2)}>Register now</span>
          </a>
        </div>
      ) : register == 2 ? (
        <div className="login-container">
          <h3 className="form-title">REGISTER</h3>
          <hr className="hr" />
          <h4 className="form-sub-title">We Are Happy To See You!</h4>
          <input placeholder="Email Adress" className="form-input" />
          <br />
          <input placeholder="Password" className="form-input" />
          <a className="form-btn">Register</a>
          <a className="form-second-btn">
            <span onClick={() => setRegister(1)}>go back to login</span>
          </a>
        </div>
      ) : (
        <div className="login-container">
          <h3 className="form-title">PASSWORD RESET</h3>
          <hr className="hr" />
          <h4 className="form-sub-title">We Help You Back!</h4>
          <input placeholder="Email Adress" className="form-input" />
          <br />
          <a className="form-btn">Submit</a>
          <a className="form-second-btn">
            <span onClick={() => setRegister(1)}>go back to login</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default Login;
