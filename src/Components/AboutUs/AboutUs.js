import React from "react";
import "./AboutUs.scss";
import { BsTruck, BsCloudDrizzle, BsShop, BsInstagram } from "react-icons/bs";

const AboutUs = () => {
  return (
    <div>
      <div className="AboutUs-header">
        <h3 className="about-h3">ABOUT Us</h3>
        <span className="about-span"> HOME - ABOUT US</span>
      </div>
      <div className="who-we-are">
        <div className="who-we-are-img">
          <img src="https://cdn.shopify.com/s/files/1/0304/5739/7386/files/about1.jpg?v=1613680647" />
        </div>
        <div className="who-we-are-info">
          <h3 className="info-h3"> Who We Are</h3>
          <h4 className="info-h4">Ceramic Decoration</h4>
          <p className="info-p">
            We believe in a world where you have total freedom to be you,
            without judgement. To experiment. To express yourself. To be brave
            and grab life as the extraordinary adventure it is. So we make sure
            everyone has an equal chance to discover all the amazing things
            they’re capable of – no matter who they are, where they’re from or
            what looks they like to boss. We exist to give you the confidence to
            be whoever you want to be.
          </p>
        </div>
      </div>
      <div className="reasons">
        <h2 className="reasons-h2">Reasons to shop with us</h2>
        <div className="reason-container">
          <div className="reason border-right">
            <BsCloudDrizzle className="reason-icon" />
            <h4 className="reason-h4">FREE SHIPPING & RETURN</h4>
            <p className="reason-p">On in-stock items ordered by 5:00 p.m.</p>
          </div>
          <div className="reason margin-top border-right">
            <BsShop className="reason-icon" />
            <h4 className="reason-h4">FREE SHIPPING & RETURN</h4>
            <p className="reason-p">On in-stock items ordered by 5:00 p.m.</p>
          </div>
          <div className="reason">
            <BsTruck className="reason-icon margin-top" />
            <h4 className="reason-h4">FREE SHIPPING & RETURN</h4>
            <p className="reason-p">On in-stock items ordered by 5:00 p.m.</p>
          </div>
        </div>
      </div>
      <div className="on-instagram">
        <h2 className="instagram-h2">CERATIN ON INSTAGRAM</h2>
        <p className="instagram-p">@certain</p>
        <div className="instagram-posts">
          <div className="instagram-post">
            <img
              className="instagram-post-img"
              src="https://cdn.shopify.com/s/files/1/0304/5739/7386/files/instagram3.jpg?v=1788435318257740283"
            />
            <div className="hover-img">
              <BsInstagram className="instagram-icon" />
            </div>
          </div>
          <div className="instagram-post">
            <img
              className="instagram-post-img"
              src="https://cdn.shopify.com/s/files/1/0304/5739/7386/files/instagram4.jpg?v=3063799311357576538"
            />
            <div className="hover-img">
              <BsInstagram className="instagram-icon" />
            </div>
          </div>
          <div className="instagram-post">
            <img
              className="instagram-post-img"
              src="https://cdn.shopify.com/s/files/1/0304/5739/7386/files/instagram5.jpg?v=10062453878492527151"
            />
            <div className="hover-img">
              <BsInstagram className="instagram-icon" />
            </div>
          </div>
          <div className="instagram-post">
            <img
              className="instagram-post-img"
              src="https://cdn.shopify.com/s/files/1/0304/5739/7386/files/instagram1.jpg?v=14609726055116328293"
            />
            <div className="hover-img">
              <BsInstagram className="instagram-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
