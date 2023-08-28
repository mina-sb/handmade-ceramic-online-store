import React, { useContext, useEffect } from "react";
import { AppContext } from "../../AppContext";
import { useLocation } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Features from "../../Components/Features/Features";
import OfferProduct from "../../Components/OfferProduct/OfferProduct";
import Products from "../../Components/Products/Products";
import "./Home.scss";

const Home = () => {
  const { showSearchResultsFlag, navColor } = useContext(AppContext);
  const [showSearchResults, setShowSearchResults] = showSearchResultsFlag;
  const [navBg, setNavBg] = navColor;
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/detail") {
      setNavBg(true);
    }
    if (location.pathname === "/") {
      setShowSearchResults(false);
    }
  }, []);

  return (
    <div className="home">
      <Banner />
      <Features />
      <h3 className="home-h3">PRODUCTS</h3>
      <Products limit={28} />
      <OfferProduct />
    </div>
  );
};

export default Home;
