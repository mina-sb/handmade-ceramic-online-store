import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../AppContext";
import Products from "../Products/Products";

import "./WishList.scss";

const WishList = () => {
  const { wishlistContext, searchResultArray, showSearchResultsFlag } =
    useContext(AppContext);
  const [wishlist, setWishlist] = wishlistContext;
  const [searchResult, setSearchResult] = searchResultArray;
  const [showSearchResults, setShowSearchResults] = showSearchResultsFlag;
  const navigate = useNavigate();

  useEffect(() => {
    setShowSearchResults(true);
    setSearchResult(wishlist);
  }, [wishlist]);

  return (
    <div>
      <div className="cart-detail-header">
        <h3 className="cart-h3"> WishList</h3>
        <span className="cart-span">
          HOM - YOUR List of your Favorite items{" "}
        </span>
      </div>
      {wishlist.length > 0 ? (
        <div className="wish-list">
          <Products limit={wishlist.length} />
        </div>
      ) : (
        <div className="empty-wishlist">
          <span className="empty-cart-span">YOUR WISH LIST IS EMPTY</span>
          <br />
          <a
            className="empty-cart-btn wishlist-btn"
            onClick={() => {
              navigate("/");
            }}
          >
            Go To Shop
          </a>
        </div>
      )}
    </div>
  );
};

export default WishList;
