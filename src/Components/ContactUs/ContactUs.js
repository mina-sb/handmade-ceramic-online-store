import React from "react";
import "./ContactUs.scss";
import { FaTwitter, FaPinterestP, FaFacebookF } from "react-icons/fa";

const ContactUS = () => {
  return (
    <div>
      <div className="contact-header">
        <h3 className="contact-h3">Contact Us</h3>
        <span className="contact-span"> Home- Contact us</span>
      </div>
      <div className="contact-container">
        <div className="contact-socailmedia">
          <span className="logo">LOGO</span>
          <p>Be the first who learns about our great promotions!</p>
          <span>FOLLOW US</span>
          <hr className="hr" />
          <div className="socialMedia">
            <FaTwitter className="footer-share-btns" />
            <FaFacebookF className="footer-share-btns" />
            <FaPinterestP className="footer-share-btns" />
            <FaTwitter className="footer-share-btns" />
          </div>
        </div>
        <div className="send-messsage">
          <h3 className="form-title">Send Us a Message!</h3>
          <hr className="hr" />
          <input placeholder="Your Email Adress" className="form-input" />
          <br />
          <textarea placeholder="Message" className="form-textarea" rows={7} />
          <a className="form-btn">Send Message</a>
          <a className="form-second-btn">Clear</a>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
